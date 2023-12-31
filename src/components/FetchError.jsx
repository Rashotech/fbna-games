const reload = () => {
  typeof window !== "undefined" && window.location.reload();
};

const FetchError = ({ error, className, onRefetch = reload }) => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center space-y-4 py-2 md:h-[40vh]">
      <p className="text-grey-600 text-base text-center font-medium md:text-xl">
        {error}
      </p>
      <button
        className="px-4 py-2 rounded-md inline-block bg-primary text-grey-100 focus:outline-none transition-colors hover:bg-primary/70"
        onClick={onRefetch}
      >
        Retry Again
      </button>
    </div>
  );
};

export default FetchError;
