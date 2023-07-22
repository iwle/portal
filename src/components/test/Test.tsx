import { Button } from "@chakra-ui/react";
import { uploadToS3 } from "../../utils/data/UploadToS3";

export default () => {
    const jsn = JSON.stringify("Hello world");
    const blob = new Blob([jsn], { type: "application/json" });
    const file = new File([blob], 'file.json');
    return (<>
        <Button
            colorScheme={"teal"}
            variant={"solid"}
            onClick={() => {
                uploadToS3('testing', file);
            }}
        >Hello</Button >
    </>);
};