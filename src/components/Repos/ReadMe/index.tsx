import { useEffect, useState } from "react";
import { readmeapi } from "../../../services/api";
import ReadMeContent from "./ReadMeContent";

interface MainProps {
  fullname: string;
  default_branch: string;
}

export function ReadMe(props: MainProps) {
  const [readMe, setReadMe] = useState<string>("No Read Me available");
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    async function getReadMeData() {
      await readmeapi
        .get(`/${props.fullname}/${props.default_branch}/README.md`)
        .then((response) => {
          setReadMe(response.data);
          setIsAvailable(true);
        });
    }

    getReadMeData();
  }, [props.fullname, props.default_branch]);

  return <div>{isAvailable ? <ReadMeContent readme={readMe} /> : readMe}</div>;
}
