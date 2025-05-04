import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function NavButtons() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant="ghost" size="sm" onClick={() => navigate("/solutions")}>
        Solutions
      </Button>
      <Button variant="ghost" size="sm" onClick={() => navigate("/collaboration")}>
        Collaboration
      </Button>
      <Button variant="ghost" size="sm" onClick={() => navigate("/about-us")}>
        About Us
      </Button>
    </div>
  );
}
