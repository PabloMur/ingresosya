import { WelcomeMessage } from "./WelcomeMessage";

const UserComp = () => {
  return (
    <div className="hidden sm:flex justify-center items-center">
      <WelcomeMessage />
      <div className="bg-purple-700 rounded-full p-2 h-8 w-8 flex justify-center items-center ml-2">
        <p>P</p>
      </div>
    </div>
  );
};
export { UserComp };
