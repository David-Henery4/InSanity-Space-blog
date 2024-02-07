import { SectionHeading } from "../shared";

const HeadingSection = () => {
  return (
    <div className="text-center lgLap:col-start-1 lgLap:col-end-13">
      <div className="max-w-80 mx-auto medTab:max-w-[420px]">
        <SectionHeading>Check out more of our stories</SectionHeading>
      </div>
      <p className="mt-8 text-sm leading-6 max-w-96 mx-auto medTab:text-base medTab:max-w-[520px]">
        {/* Need to be replaced with proper text */}
        {/* Maybe through the CMS */}
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage your business in one secure platform.
      </p>
    </div>
  );
};

export default HeadingSection;
