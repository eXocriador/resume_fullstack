import ResumeSidebar from "@/components/ResumeSidebar";
import ResumeMain from "@/components/ResumeMain";

const Index = () => {
  return (
    <div className="bg-muted/40 min-h-screen p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="resume-container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 bg-background shadow-2xl rounded-2xl overflow-hidden">
        <ResumeSidebar />
        <ResumeMain />
      </div>
    </div>
  );
};

export default Index;
