import { useState } from "react";
import { Box, Button, Container, Group, TextInput, Text } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import ApplicationStep from "@/components/ApplicationStep";
import notification from "@/utils/notification";
import { addMyQuestion } from "@/services/application/questionController";
import { IconPlus, IconTrash } from "@tabler/icons-react";

const Index: React.FC = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const appId = searchParams.get("appId");

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
    // 删除 questions 中的 id 和 options 中的 id
    // https://mantine.dev/form/values/#transformvalues
    transformValues: (values) => ({
      questions: values.questions.map((question) => ({
        title: question.title,
        options: question.options.map((option) => ({
          value: option.value,
          grade: option.grade,
          evaluation: option.evaluation,
        })),
      })),
    }),
    validate: {
      // [APP_NAME]: hasLength(
      //   { min: 3 },
      //   APP_NAME + " must be at least 3 characters"
      // ),
    },
  });

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
    setIsLoading(true);
    try {
      const res = await addMyQuestion({
        appId: Number(appId),
        questions: values.questions,
      });
      const { code, message } = res.data;
      if (code === 0) {
        notification.success("Save questions successfully");
        navigate(`/application/create/step/3?appId=${appId}`);
      } else {
        notification.fail(message!);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ApplicationStep active={1} />

      <Container>
        <form onSubmit={form.onSubmit(submit)}>
          {form.getValues().questions.map((question, qIndex) => (
            <Box key={question.id}>
              <Group>
                <TextInput
                  {...form.getInputProps(`questions.${qIndex}.title`)}
                  label={`Question ${qIndex + 1}`}
                  placeholder="Question Title"
                  required
                />
                <Button
                  color="red"
                  onClick={() => removeQuestion(qIndex)}
                  leftSection={<IconTrash size={16} />}
                >
                  Remove Question
                </Button>
              </Group>
              {question.options.map((option, oIndex) => (
                <Group key={option.id}>
                  <Text>{`Option ${String.fromCharCode(65 + oIndex)}`}</Text>
                  <TextInput
                    {...form.getInputProps(
                      `questions.${qIndex}.options.${oIndex}.value`
                    )}
                    label="Content"
                    placeholder="Content"
                    required
                  />
                  <Button
                    variant="outline"
                    color="red"
                    onClick={() => removeOption(qIndex, oIndex)}
                    leftSection={<IconTrash size={16} />}
                  >
                    Remove
                  </Button>
                </Group>
              ))}
              <Button
                variant="outline"
                mt="sm"
                onClick={() => addOption(qIndex)}
                leftSection={<IconPlus size={16} />}
              >
                Add Option
              </Button>
            </Box>
          ))}
          <Button onClick={addQuestion} leftSection={<IconPlus size={16} />}>
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
