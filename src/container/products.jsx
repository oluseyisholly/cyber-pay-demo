import React from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { BiPlus, BiSearch, BiTransfer } from "react-icons/bi"
import { MdProductionQuantityLimits } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import "../asset/styles/myStyle.css"
import { CustomCard } from "../components/customCard"
import CustomForm from "../components/customForm"
import CustomModal from "../components/customModal"
import { setRoute } from "../features/layoutSlice"
import { setUserProducts } from "../features/userSlice"

export const Products = () => {
    const [show, setShow] = React.useState(false)

    const [products, setProducts] = React.useState({
        productName: "",
        productCode: "",
        description: "",
    })

    useSelector((state) => state.user.product)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserProducts(products));
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Product",
            endRoute: "",
            getStartedStyle: "d-inline text-dark",
            otherStyle: "d-none "
           }))
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <React.Fragment>
            <Container as={"section"} fluid>
               <Row className="flex-row justify-content-center mt-lg-5 mt-3">
                    <Col lg={11} md={11} sm={10}>
                        <Row className="flex-row justify-content-between pt-3 gy-3">
                            <Col lg={6} md={6} sm={12}>
                                <MdProductionQuantityLimits className="icon-fs color-blue pb-2"/>
                                <h1 className="fw-acc d-inline pt-3">Products</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Listings of products created</h5>
                                </span>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="position-relative d-flex flex-row justify-content-end">
                                <Button 
                                    className="rounded-circle my-border text-center text-white d-flex justify-content-center align-items-center" 
                                    onClick={() => setShow(true)}>
                                    <BiPlus />
                                </Button>
                                <CustomModal
                                    setShowModal={setShow} 
                                    show={show}    
                                    title={
                                        <div className="text-white trans-head ps-6 py-3">
                                            <h2>Add Products</h2>
                                            <p>Add new product to existing products</p>
                                        </div>
                                    }  
                                    body={
                                        <div className="">
                                            <Row className="pb-6 flex-row justify-content-center">
                                                <Col lg={10}>
                                                    <h4 className="py-4 color-blue trans-font fw-bold">PRODUCTS INFORMATION</h4>
                                                    <Form>
                                                        <Row className="gy-3 gx-5">
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Product Name"}
                                                                    placeholder={"Enter Product Name"}
                                                                    type={"text"}
                                                                    value={products.productName}
                                                                    id={"formGridProduct"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(productName) => { setProducts({
                                                                        ...products, 
                                                                        productName
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Product Code"}
                                                                    placeholder={"Enter Product Code"}
                                                                    type={"text"}
                                                                    value={products.productCode}
                                                                    id={"formGridCode"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(productCode) => { setProducts({
                                                                        ...products, 
                                                                        productCode
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm 
                                                                    label={"Description"}
                                                                    placeholder={"Enter Product Description"}
                                                                    type={"text"}
                                                                    area={"textarea"}
                                                                    value= {products.description}
                                                                    id={"formGridDescription"}
                                                                    classStyle={"area"}
                                                                    onchange = {(description) => { setProducts({
                                                                        ...products, 
                                                                        description
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <Row className="gx-5 mt-5">
                                                        <Col xs={6}>
                                                            <Button 
                                                                className="w-100 inputclass"
                                                                onClick={handleSubmit} 
                                                            >
                                                                Submit
                                                            </Button>
                                                        </Col>
                                                        <Col xs={6}>
                                                            <Button 
                                                                variant="outline-primary" 
                                                                className="w-100 inputclass"
                                                            >
                                                                BACK
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    }                          
                                />
                                <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Product</div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col lg={6} md={12} sm={12}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                        placeholder="Search Products"
                                        aria-label="Search Sub Account"
                                        aria-describedby="basic-addon2"
                                        className="inputclass fs-5 rounded-0 card-color-2 ps-4 input-bg "
                                    />
                                    <InputGroup.Text id="basic-addon2" className="border-0 position-absolute no">
                                        <BiSearch className="fs-1 fw-lighter font-generic"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="gy-5 gx-5">
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Awoof</h5>
                                                    <p className="card-color2 fs-5">Product Name</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-7 fw-bold text-end">278t2uj</h5>
                                                    <p className="card-color2 fs-5 text-end">Product Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold fs-5">Product Description</h5>
                                                    <p className="card-color1 fs-5">Wallet Code is a kind of card used for doing a lot of things</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="busi ms-3 w-50">
                                                        <BiTransfer className="me-3"/>
                                                        Edit Product
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                        </Row>
                    </Col>
               </Row>
            </Container>
        </React.Fragment>
    )
}