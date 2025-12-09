export default function GeneralInfo(props) {
  const { info } = props;
  const entries = Object.entries(info);
  return (
    <div className="bg-white dark:bg-secondary p-5 rounded-xl flex flex-col space-y-4">
      <span className=" text-xl font-semibold capitalize">
        general information
      </span>
      <p class="text-slate-400 text-sm">
        as we live, our hearts turn colder. cause pain is what we go through as
        we become older. we get insulted by others, lose trust for those others.
        we get back stabbed in the front by friends. it becomes harder for us to
        give others a hand. we get our heart broken by people we love, even that
        we them all...
      </p>
      <ul className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
        {entries.map(([key, value]) => (
          <li className="capitalize shadow-md dark:bg-white/5 dark:shadow-none p-5 flex flex-col rounded-lg">
            <span className="text-slate-400 text-sm">{key}</span>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
