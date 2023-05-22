import { useState } from "react";

// import axios, { AxiosError } from "axios";
// import { useApi } from "@futura-dev/react-utils-kit/src/api";
import { Accordion, Alert, Button, Divider } from "@futura-dev/react-ui-kit/dist/components";
import { DropzoneFile, Input, InputPrefix, TextArea } from "@futura-dev/react-ui-kit/dist/form";

// const apiCall = () => {
//   return axios.get<{ items: string[] }>("https://jsonplaceholder.typicode.com/todos/1");
// };

function App() {
  const [file, setFile] = useState<File | null>(null);
  // const { status, response } = useApi(apiCall, new AxiosError());

  return (
    <div className="flex flex-col">
      {/* <div className="flex py-2">
        <div>{status === "success" ? "" : ""}</div>
        <div>{status === "success" && JSON.stringify(response.data)}</div>
      </div> */}

      <div className="flex py-4 text-futura-purple font-semibold text-xl">Form Components</div>

      <div className="py-4">
        <Input name="Input" id="Input" type="text" placeholder="Input placeholder" />
      </div>

      <div className="py-4">
        <InputPrefix name="InputPrefix" id="InputPrefix" prefix="www.linkedin.com/" placeholder="janesmith" />
      </div>

      <div className="py-4">
        <TextArea name="TextArea" id="TextArea" placeholder="TextArea placeholder" />
      </div>

      <div className="flex py-4">
        <DropzoneFile
          id="DropzoneFile"
          name="DropzoneFile"
          title="Upload File"
          subTitle="Description upload"
          reset={() => setFile(null)}
          onChangeFile={setFile}
          file={file}
        />
      </div>

      <div className="flex pt-8">
        <Divider className="w-full h-0.5 bg-gray-300" />
      </div>

      <div className="flex py-4 text-futura-yellow font-semibold text-xl">Generic Components</div>

      <div className="flex flex-col text-start py-4">
        <Accordion title="Accordion Text" description="Accordion description">
          <div className="flex py-4">Hello World</div>
        </Accordion>
      </div>

      <div className="grid gap-2 grid-cols-2 py-4">
        <Alert className="text-start" text="Alert Info" variant="info" active timing={100000} />
        <Alert className="text-start" text="Alert wrong" variant="danger" active timing={100000} />
        <Alert className="text-start" text="Alert success" variant="success" active timing={100000} />
        <Alert className="text-start" text="Alert warning" variant="warning" active timing={100000} />
      </div>

      <div className="flex justify-between py-4">
        <div className="flex">
          <Button text="Black" variant="black" />
          <Button text="White" variant="white" />
        </div>
        <Button text="Purple" size="m" variant="purple" />
      </div>

      <div className="flex pt-8">
        <Divider className="w-full h-0.5 bg-gray-300" />
      </div>
    </div>
  );
}

export default App;
