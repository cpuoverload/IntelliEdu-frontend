import { createBrowserRouter } from "react-router-dom";
import { Group } from "@mantine/core";
import {
  IconApps,
  IconBox,
  // IconChartPie,
  IconCirclePlus,
  IconFileCheck,
  IconHistory,
  IconHome,
  IconListLetters,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";
import RequireAuth from "./RequireAuth";
import Layout from "@/components/Layout";
import Login from "@/pages/user/Login";
import Register from "@/pages/user/Register";
import Home from "@/pages/Home";
import MyApplication from "@/pages/application/MyApplication";
import MyAnswerRecord from "@/pages/answer-record/MyAnswerRecord";
import UserManagement from "@/pages/management/UserManagement";
import ApplicationForm from "@/pages/application/ApplicationForm";
import QuestionForm from "@/pages/application/QuestionForm";
import ScoringForm from "@/pages/application/ScoringForm";
import StepComplete from "@/pages/application/StepComplete";
import AppManagement from "@/pages/management/AppManagement";
import QuestionManagement from "@/pages/management/QuestionManagement";
import ScoringManagement from "@/pages/management/ScoringManagement";
import AnswerManagement from "@/pages/management/AnswerManagement";
import SolvingQuestions from "@/pages/solve-questions/SolvingQuestions";
import SolvingResult from "@/pages/solve-questions/SolvingResult";
import  from "./router";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@tabler/icons-react");
jest.mock("./RequireAuth");
jest.mock("@/components/Layout");
jest.mock("@/pages/user/Login");
jest.mock("@/pages/user/Register");
jest.mock("@/pages/Home");
jest.mock("@/pages/application/MyApplication");
jest.mock("@/pages/answer-record/MyAnswerRecord");
jest.mock("@/pages/management/UserManagement");
jest.mock("@/pages/application/ApplicationForm");
jest.mock("@/pages/application/QuestionForm");
jest.mock("@/pages/application/ScoringForm");
jest.mock("@/pages/application/StepComplete");
jest.mock("@/pages/management/AppManagement");
jest.mock("@/pages/management/QuestionManagement");
jest.mock("@/pages/management/ScoringManagement");
jest.mock("@/pages/management/AnswerManagement");
jest.mock("@/pages/solve-questions/SolvingQuestions");
jest.mock("@/pages/solve-questions/SolvingResult");