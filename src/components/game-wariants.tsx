import Button from "./button";

export default function GameWariants() {
  return (
    <div className="flex flex-col gap-6">
      <Button color="mango">NEW GAME (VS CPU)</Button>
      <Button color="turquoise">NEW GAME (VS PLAYER)</Button>
    </div>
  );
}
