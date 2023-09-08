export default function FaqDropdown({
  id,
  onClick,
  open,
  question,
  answer,
}: {
  id: number;
  onClick: (id: number) => void;
  open: number | null;
  question: string;
  answer: string;
}) {
  return (
    <div>
      {/* Question */}
      <button
        className="w-full bg-neutral-800 hover:bg-neutral-700 p-4 flex justify-between items-center"
        onClick={() => onClick(id)}
      >
        <p className="text-lg lg:text-2xl">{question}</p>
        <div className="text-4xl lg:text-6xl font-extralight">
          {open === id ? "×" : "+"}
        </div>
      </button>
      {/* Answer */}
      <div
        className={`${
          open === id ? "py-4" : "py-0"
        } px-4 text-lg lg:text-2xl bg-neutral-800 mt-0.5 transition-all ease-in-out duration-300 whitespace-pre-line`}
        style={{
          maxHeight: open === id ? "500px" : "0px",
          overflow: "hidden",
        }}
      >
        {answer}
      </div>
    </div>
  );
}
