import React, { useEffect, useState } from "react";
import { PreviewBox } from "./Preview.styled";

const Preview = ({ data, focused }) => {
  const [processeddata, setProcesseddata] = useState();
  const [prevshow, setprevshow] = useState(true);

  //Check url
  function CheckUrl(text) {
    // /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s]+)/g;
    var urlRegex = /(((https?:\/\/)|(http?:\/\/)|(www\.)))/g;
    let test = urlRegex.test(text);
    return test;
  }

  useEffect(() => {
    if (data) {
      data.split(" ").forEach((d) => {
        if (CheckUrl(d)) {
          setProcesseddata("url found");
        } else {
          setProcesseddata(data);
        }
        //Checking the line break
        // if (d.indexOf("\n") !== -1) {
        //   console.log("its break");
        // }
      });
    }
    return () => {};
  }, [data]);

  return (
    <>
      <PreviewBox
        show={focused}
        dangerouslySetInnerHTML={{ __html: processeddata }}
      />
    </>
  );
};

export default Preview;
