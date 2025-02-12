import * as React from "react";

export interface EmailTemplateProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  url?: string;
  message?: string;
}

export const ContactFormEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = (props: EmailTemplateProps) => (
  <div>
    <h1>Welcome, Slawa & Stefan</h1>
    <p>
      Somebody called &quot;{props.firstName} {props.lastName}&quot; (email:{" "}
      <a href={`mailto:${props.email}`}>{props.email}</a>) wants to have an app
      for the website (URL: <a href={props.url}>{props.url}</a>.
    </p>
    <p>Message: {props.message}</p>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);
