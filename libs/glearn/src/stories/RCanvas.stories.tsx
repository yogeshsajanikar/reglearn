import React from "react";
import { Story, Meta } from "@storybook/react";
import { RCanvas, RCanvasProps } from "../intro/RCanvas";

export default {
  title: "WebGL/Canvas",
  component: RCanvas,
  argTypes: {},
} as Meta;

const Template: Story<RCanvasProps> = (args) => <RCanvas {...args} />;

export const PlainCanvas = Template.bind({});
PlainCanvas.args = {
  border: '1px solid darkslategray',
  glColors: [1.0, 0.0, 0.0, 1.0]
};

export const DottedBlueCanvas = Template.bind({});
DottedBlueCanvas.args = {
  border: '2px dotted blue',
  glColors: [0.2, 0.2, 0.8, 1.0]
};
