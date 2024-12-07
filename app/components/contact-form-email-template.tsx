import * as React from "react";

export interface EmailTemplateProps {
  name?: string;
  email?: string;
  url?: string;
  appAndroid?: boolean;
  appIos?: boolean;
  message?: string;
}

export const ContactFormEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = (props: EmailTemplateProps) => (
  <div>
    <h1>Welcome, Slawa & Stefan</h1>
    <p>
      Somebody called "{props.name}" (email:{" "}
      <a href={`mailto:${props.email}`}>{props.email}</a>) wants to have a{" "}
      {props.appAndroid ? "Android" : ""}, {props.appIos ? "iOS" : ""} app(s)
      for the website (URL: <a href={props.url}>{props.url}</a>.
    </p>
    <p>Message: {props.message}</p>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);
