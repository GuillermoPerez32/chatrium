import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const TeamsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h1 className="font-semibold text-xl">Teams</h1>
      </div>
    </div>
  );
};

export default TeamsPage;
