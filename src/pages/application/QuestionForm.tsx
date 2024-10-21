import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Group,
  TextInput,
  Text,
  Divider,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ApplicationStep from "@/components/ApplicationStep";
import notification from "@/utils/notification";
import { listMyApplication } from "@/services/application/applicationController";
import {
  addMyQuestion,
  getMyQuestionOfOneApp,
  updateMyQuestion,
} from "@/services/application/questionController";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { AppType } from "@/const/enum";
import useOperation from "@/hooks/useOperation";

const getOptionKey = (index: number) => String.fromCharCode(65 + index);

const Index: React.FC = () => {
  const navigate = useNavigate();
  const operation = useOperation();

  const [searchParams] = useSearchParams();
  const appId = searchParams.get("appId");

  const [appType, setAppType] = useState<AppType>();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      questions: [
        {
          // id 仅用于遍历 key，不传给后端
          id: nanoid(),
          title: "",
          options: [
            {
              // id 仅用于遍历 key，不传给后端
              id: nanoid(),
              // 参数 key 由前端自动生成（按 A, B, C 的顺序）
              value: "",
              grade: undefined,
              evaluation: undefined,
            },
          ],
        },
      ],
    },
    // 删除 id 字段，补充 key 字段
    // https://mantine.dev/form/values/#transformvalues
    transformValues: (values) => ({
      questions: values.questions.map((question) => ({
        title: question.title,
        options: question.options.map((option, oIndex) => ({
          key: getOptionKey(oIndex),
          value: option.value,
          grade: option.grade,
          evaluation: option.evaluation,
        })),
      })),
    }),
  });

  useEffect(() => {
    // 检查是否携带 appId 参数
    const checkAppId = () => {
      if (appId === null) {
        notification.fail("appId is required");
        return false;
      }
      return true;
    };

    // 检查 app 是否存在，并设置 appType
    const checkAppExistAndSetAppType = async () => {
      try {
        const res = await listMyApplication({
          id: Number(appId),
        });
        const { code, data } = res.data;
        if (code !== 0) {
          notification.fail("Failed to get application");
          return false;
        }
        if (data?.total === 0) {
          notification.fail("Application not found");
          navigate("/application/create/step/1");
          return false;
        }
        // @ts-expect-error 可以保证只有一条记录
        setAppType(data.records[0].type);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    };

    // 尝试回填表单
    const backFill = async () => {
      try {
        const res = await getMyQuestionOfOneApp({
          appId: Number(appId),
        });
        const { code, data } = res.data;
        if (code !== 0) {
          notification.fail("Failed to get questions");
          return;
        }
        // 没有找到记录（这种情况可能是用户只创建了应用，没创建题目就切换页面了）
        if (!data) {
          return;
        }
        form.setValues({
          // @ts-expect-error form 误以为 grade 的类型是初始值类型 (undefined)
          questions: data.questions.map((question) => ({
            id: nanoid(),
            title: question.title,
            options: question.options!.map((option) => ({
              id: nanoid(),
              value: option.value,
              grade: option.grade,
              evaluation: option.evaluation,
            })),
          })),
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (!checkAppId() || !checkAppExistAndSetAppType()) {
      navigate("/application/create/step/1", { replace: true });
      return;
    }
    if (operation === "edit") {
      backFill();
    }
  }, []);

  const addQuestion = () =>
    form.insertListItem("questions", {
      id: nanoid(),
      title: "",
      options: [
        {
          id: nanoid(),
          value: "",
          grade: undefined,
          evaluation: undefined,
        },
      ],
    });

  const addOption = (index: number) => {
    form.insertListItem(`questions.${index}.options`, {
      id: nanoid(),
      value: "",
      grade: undefined,
      evaluation: undefined,
    });
  };

  const removeQuestion = (index: number) => {
    form.removeListItem("questions", index);
  };

  const removeOption = (qIndex: number, oIndex: number) => {
    form.removeListItem(`questions.${qIndex}.options`, oIndex);
  };

  const submit = async (values: Application.AddMyQuestionRequest) => {
    // 如果是创建，则插入（如果一个 appId 重复插入 question 记录，后端会不让再次插入，有这个兜底）
    const create = async () => {
      try {
        const res = await addMyQuestion({
          appId: Number(appId),
          questions: values.questions,
        });
        const { code, message } = res.data;
        if (code !== 0) {
          notification.fail(message!);
          return;
        }
        notification.success("Save questions successfully");
        navigate(`/application/${operation}/step/3?appId=${appId}`);
      } catch (error) {
        console.error(error);
      }
    };

    const update = async (id: number) => {
      try {
        const res = await updateMyQuestion({
          id,
          questions: values.questions,
        });
        const { code, message } = res.data;
        if (code !== 0) {
          notification.fail(message!);
          return;
        }
        notification.success("Update questions successfully");
        navigate(`/application/${operation}/step/3?appId=${appId}`);
      } catch (error) {
        console.error(error);
      }
    };

    // 如果是编辑，先拉取 app 对应的 question 数据
    const edit = async () => {
      try {
        const res = await getMyQuestionOfOneApp({
          appId: Number(appId),
        });
        const { code, data } = res.data;
        if (code !== 0) {
          notification.fail("Failed to get questions");
          return;
        }
        // 没有找到记录，则插入（这种情况可能是用户只创建了应用，没创建题目就切换页面了）
        if (!data) {
          create();
        } else {
          // 有记录，则更新
          update(data.id!);
        }
      } catch (error) {
        console.error(error);
      }
    };

    setIsLoading(true);
    if (operation === "create") {
      await create();
    } else {
      await edit();
    }
    setIsLoading(false);
  };

  const renderOptions = (
    question: (typeof form.values.questions)[number],
    qIndex: number
  ) => {
    return question.options.map((option, oIndex) => (
      <Group key={option.id} mt={16} ml={60} justify="space-between">
        <Group>
          <Text>{`Option ${getOptionKey(oIndex)}`}</Text>
          <TextInput
            {...form.getInputProps(
              `questions.${qIndex}.options.${oIndex}.value`
            )}
            placeholder="Content"
            required
          />
          <NumberInput
            {...form.getInputProps(
              `questions.${qIndex}.options.${oIndex}.grade`
            )}
            placeholder="Grade"
            allowNegative={false}
            allowDecimal={false}
            disabled={appType !== AppType.Grade}
            required={appType === AppType.Grade}
          />
          <TextInput
            {...form.getInputProps(
              `questions.${qIndex}.options.${oIndex}.evaluation`
            )}
            placeholder="Evaluation"
            disabled={appType !== AppType.Evaluation}
            required={appType === AppType.Evaluation}
          />
        </Group>
        <Button
          variant="outline"
          color="red"
          size="xs"
          pl={8}
          pr={8}
          onClick={() => removeOption(qIndex, oIndex)}
        >
          <IconTrash size={16} />
        </Button>
      </Group>
    ));
  };

  return (
    <>
      <ApplicationStep active={1} />

      <Container>
        <form onSubmit={form.onSubmit(submit)}>
          {form.getValues().questions.map((question, qIndex) => (
            <Box key={question.id} mb={24}>
              <Group justify="space-between" align="center">
                <Text size="xl" fw={700}>
                  Question {qIndex + 1}
                </Text>
                <Button
                  color="red"
                  size="xs"
                  pl={8}
                  pr={8}
                  onClick={() => removeQuestion(qIndex)}
                >
                  <IconTrash size={16} />
                </Button>
              </Group>
              <TextInput
                {...form.getInputProps(`questions.${qIndex}.title`)}
                placeholder="Title"
                required
                mt={10}
              />
              {renderOptions(question, qIndex)}
              <Button
                variant="outline"
                size="xs"
                mt={16}
                ml={60}
                onClick={() => addOption(qIndex)}
                leftSection={<IconPlus size={16} />}
              >
                Add Option
              </Button>
              <Divider my="md" variant="dashed" />
            </Box>
          ))}
          <Button
            size="xs"
            onClick={addQuestion}
            leftSection={<IconPlus size={16} />}
          >
            Add Question
          </Button>

          <Group justify="flex-end" mt="lg">
            <Button type="submit" loading={isLoading} w={100}>
              Next
            </Button>
          </Group>
        </form>
      </Container>
    </>
  );
};

export default Index;
