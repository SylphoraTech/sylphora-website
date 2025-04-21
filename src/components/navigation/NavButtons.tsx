import { Button } from "@/components/ui/button"; // Assuming Button is already set up

export function NavButtons() {
  return (
    <div className="flex gap-4">
      <Button variant="ghost" size="sm">Home</Button>
      <Button variant="ghost" size="sm">Solutions</Button>
      <Button variant="ghost" size="sm">Collaboration</Button>
      <Button variant="ghost" size="sm">About Us</Button>
    </div>
  );
}
