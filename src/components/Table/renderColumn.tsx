import { Avatar, Badge, Image } from "@mantine/core";
import { AppType, AuditStatus, ScoringStrategy } from "@/const/enum";
import formatDate from "@/utils/formatDate";

export const renderAppType = (type: number) => (
  <Badge variant="light" color={type === AppType.Grade ? "pink" : "blue"}>
    {type === AppType.Grade ? "Grade" : "Evaluation"}
  </Badge>
);

export const renderImage = (url: string) => <Image src={url} />;

export const renderAvatar = (avatarUrl: string, nickname: string) => (
  <Avatar
    src={avatarUrl}
    name={nickname}
    color={nickname ? "initials" : undefined}
    size={45}
    mx="auto"
  />
);

export const renderRole = (role: string) => (
  <Badge variant="light" color={role === "admin" ? "orange" : "gray"}>
    {role}
  </Badge>
);

export const renderTime = (time: string) => formatDate(time);

export const renderStrategy = (strategy: number) => (
  <Badge
    variant="light"
    color={strategy === ScoringStrategy.Custom ? "yellow" : "violet"}
  >
    {strategy === ScoringStrategy.Custom ? "Custom" : "AI"}
  </Badge>
);

export const renderAuditStatus = (auditStatus: number) => (
  <Badge
    variant="light"
    color={
      auditStatus === AuditStatus.Approved
        ? "green"
        : auditStatus === AuditStatus.Rejected
          ? "red"
          : "gray"
    }
  >
    {auditStatus === AuditStatus.Approved
      ? "Approved"
      : auditStatus === AuditStatus.Rejected
        ? "Rejected"
        : "Pending"}
  </Badge>
);
