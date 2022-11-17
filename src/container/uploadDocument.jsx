import React, { Fragment } from "react"
import { Container, Row ,Col, Button} from "react-bootstrap"
import { CustomCard } from "../components/customCard";
import { BiPlus } from 'react-icons/bi';
import { AiTwotoneFolder } from "react-icons/ai"
import CustomForm from "../components/customForm";
import "../asset/styles/uploadstyle/upload.css";
import useFileUpload from "react-use-file-upload";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { useDispatch } from "react-redux";
import { setRoute } from "../features/layoutSlice";

const UploadDocument = () => {
    const {
        files,
        handleDragDropEvent,
        createFormData,
        setFiles,
    } = useFileUpload();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const inputRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        createFormData();
        navigate(routes.dashboard)
    }

    React.useEffect(() => {
        dispatch(setRoute({
        midRoute: " Get Started/",
        endRoute: " Update Document",
        getStartedStyle: "d-inline ",
        otherStyle: "d-inline text-dark"
       }))
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Fragment>
            <Container as={"section"} fluid>
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11}>
                        <Row>
                            <Col>
                            <h3>Steps 4: Upload Documents</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <CustomCard className={"my-card-width"}>
                                        {files.map((name, index) => (
                                            <span key={index}>
                                                <AiTwotoneFolder className="icon2-color"/>
                                                <div className="">
                                                <p className="mb">{name.name}</p>  
                                                {files.length > 0 && (
                                                    <p className="kg2">{name.size + "Bytes"}</p> 
                                                )}
                                                </div>
                                            </span>
                                        ))}
                                </CustomCard>
                            </Col>

                            <Col lg={6}>
                            <CustomCard className={"my-card2-width"}>
                                    <span className="d-flex flex-column justify-content-center">
                                        <button 
                                            className="border-0 plus rounded w-25 mx-auto"
                                            onClick={() => inputRef.current.click()}
                                        >
                                            <BiPlus className="icon2-color"/>
                                        </button>
                                        <div className="">
                                        <p className="generic-color text-center">Add Document</p> 
                                        </div>
                                    </span>
                                </CustomCard>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} className="mt-5">
                                <CustomForm
                                    as={Col}
                                    label={"Document Type"}
                                    id={"formGridBank"}
                                    value={["Select Documents Type", "Pdf", "doc"]}
                                    defaultvalue={"Choose Bank"}
                                    classStyle={"inputclass"}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} className="cac mt-5 p-4 "> 
                                <span
                                    onDragEnter={handleDragDropEvent}
                                    onDragOver={handleDragDropEvent}
                                    onDrop={(e) => {
                                        handleDragDropEvent(e);
                                        setFiles(e, 'a');
                                    }}
                                >
                                    <AiTwotoneFolder className="icon2-color"/>
                                    <span
                                        className="my-upload">Upload CAC or Company Documents
                                    </span>
                                    <div className="my-uploads">
                                        Drag your file here
                                    </div>  
                                    <input
                                        ref={inputRef}
                                        type="file"
                                        multiple
                                        style={{display: "none"}}
                                        onChange={(e) => {
                                            setFiles(e, 'a');
                                            inputRef.current.value = null;
                                        }}
                                    />                      
                                </span>
                            </Col>    
                        </Row>
                        <Row>
                            <Col lg={9}>
                                <Button 
                                    className="my-btn mt-5 inputclass fs-5 fw-bold"
                                    onClick={handleSubmit}
                                >
                                    UPLOAD DOCUMENTS
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default UploadDocument;