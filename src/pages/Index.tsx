import ResumeSidebar from "@/components/ResumeSidebar";
import ResumeMain from "@/components/ResumeMain";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      <div className="w-full lg:w-80 flex-shrink-0 print:w-80">
        <ResumeSidebar />
      </div>
      <ResumeMain />
    </div>
  );
};

export default Index;
