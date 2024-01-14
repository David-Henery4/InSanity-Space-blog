import { SectionHeading } from "../shared";

const HeadingSection = () => {
  return (
    <div className="text-center">
      <div className="max-w-80 mx-auto medTab:max-w-[360px]">
        <SectionHeading>Check out more of our stories</SectionHeading>
      </div>
      <p className="mt-8 text-sm leading-6 max-w-96 mx-auto medTab:text-base">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage your business in one secure platform.
      </p>
    </div>
  );
};

export default HeadingSection;
