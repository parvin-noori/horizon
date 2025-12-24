import { Skeleton } from "@heroui/react";
import { useGetData } from "../../hooks/useGetData";

export default function GeneralInfo(props) {
  const { info } = props ?? {};
  const { isLoading, error } = useGetData();
  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className=" text-xl font-semibold capitalize">
        general information
      </span>
      <p className="text-slate-400 text-sm">
        as we live, our hearts turn colder. cause pain is what we go through as
        we become older. we get insulted by others, lose trust for those others.
        we get back stabbed in the front by friends. it becomes harder for us to
        give others a hand. we get our heart broken by people we love, even that
        we them all...
      </p>
      <ul className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="capitalize shadow-md dark:bg-white/5 space-y-3 dark:shadow-none p-5 flex flex-col rounded-lg w-full">
                <Skeleton className="w-2/5 rounded-lg h-2 bg-default-300" />
                <Skeleton className="w-3/5 rounded-lg h-2 bg-default-300" />
            </div>
          ))
        ) : error ? (
          <span className="text-red-400">{error.message}</span>
        ) : (
          info && (
            <>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">education</span>
                {info.education}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">languages</span>
                {info.languages}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">department</span>
                {info.department}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">work history</span>
                {info.workHistory}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">organization</span>
                {info.organization}
              </li>
              <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
                <span className="text-slate-400 text-sm">birthday</span>
                {info.birthday}
              </li>
            </>
          )
        )}
      </ul>
    </div>
  );
}
