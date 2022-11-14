import React, { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CustomForm from "../components/customForm"
import { setRoute } from "../features/layoutSlice"
import { setUpdateProfile } from "../features/onBoardingSlice"
import { getStartedRoutes } from "../routes"
import { Country, State, City} from "country-state-city";

export const UpdateProfile = () => {

    let Country = require("country-state-city").Country;
    console.log(Country.getAllCountries());
    const [profile, setProfile] = useState({
        businessType: "",
        businessEmail: "",
        supportEmail: "",
        businessCategory: "",
        streetAddress: "",
        residenceState: "",
        businessWebsite: "",
        contactEmail: "",
        disputeEmail: "",
        phoneNumber: "",
        townCity: "",
        country: "",
    })

    const navigate = useNavigate();

    const userProfile = useSelector((state) => state.onBoarding.UpdateProfile);

    const dispatch = useDispatch();

    console.log(profile);

    const handleSubmit = (e) => {
        e.preventDefault();
        const update = dispatch(setUpdateProfile(profile));
        if(update){
            navigate(getStartedRoutes.updateDocument)
        }
        console.log(Country.getAllCountries.name);
    }

    React.useEffect(() => {
        dispatch(setRoute({
        midRoute: " Get Started/",
        endRoute: " Update Profile",
        getStartedStyle: "d-inline ",
        otherStyle: "d-inline text-dark"
       }))
    }, [])

    return(
        <React.Fragment>
            <Container as={"section"} fluid className="overflow-hidden pb-4">
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11}>
                        <h1 className="head pb-5 pt-3">Step 3: Update Profile</h1>
                        <Row className="gy-3 gx-5">
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Business Type"}
                                    placeholder={"BUSINESS TYPE"}
                                    value={["BUSINESS TYPE", "TAILOR"]}
                                    id={"formGridAccount"}
                                    classStyle={"inputclass"}
                                    onchange={(businessType) => {setProfile({
                                        ...profile, businessType
                                    })
                                    }}
                                />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Business Website"}
                                    placeholder={"BUSINESS WEBSITE"}
                                    id={"formGridWebsite"}
                                    type={"text"}   
                                    classStyle={"inputclass"}
                                    value={profile.businessWebsite}
                                    onchange={(businessWebsite) => {setProfile({
                                        ...profile, businessWebsite
                                    })
                                    }}
                                />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Business Email"}
                                    placeholder={"BUSINESS EMAIL"}
                                    id={"formGridEmail"}
                                    type={"email"}   
                                    classStyle={"inputclass"}
                                    value={profile.businessEmail}
                                    onchange={(businessEmail) => {setProfile({
                                        ...profile, businessEmail
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Contact Email"}
                                    placeholder={"CONTACT EMAIL"}
                                    id={"formGridContact"}
                                    type={"email"}   
                                    classStyle={"inputclass"}
                                    value={profile.contactEmail}
                                    onchange={(contactEmail) => {setProfile({
                                        ...profile, contactEmail
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Support Email"}
                                    placeholder={"SUPPORT EMAIL"}
                                    id={"formGridSupport"}
                                    type={"email"}   
                                    classStyle={"inputclass"}
                                    value={profile.supportEmail}
                                    onchange={(supportEmail) => {setProfile({
                                        ...profile, supportEmail
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Dispute Email"}
                                    placeholder={"DISPUTE EMAIL"}
                                    id={"formGridDispute"}
                                    type={"email"}   
                                    classStyle={"inputclass"}
                                    value={profile.disputeEmail}
                                    onchange={(disputeEmail) => {setProfile({
                                        ...profile, disputeEmail
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Business Category"}
                                    placeholder={"BUSINESS CATEGORY"}
                                    id={"formGridCategory"}
                                    type={"text"}   
                                    classStyle={"inputclass"}
                                    value={profile.businessCategory}
                                    onchange={(businessCategory) => {setProfile({
                                        ...profile, businessCategory
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    as={Col}
                                    label={"Phone Number"}
                                    placeholder={"PHONE NUMBER"}
                                    id={"formGridPhone"}
                                    type={"tel"}   
                                    classStyle={"inputclass"}
                                    value={profile.phoneNumber}
                                    onchange={(phoneNumber) => {setProfile({
                                        ...profile, phoneNumber
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    as={Col}
                                    label={"Street Address"}
                                    placeholder={"STREET ADDRESS"}
                                    id={"formGridAddress"}
                                    type={"text"}   
                                    classStyle={"inputclass"}
                                    value={profile.streetAddress}
                                    onchange={(streetAddress) => {setProfile({
                                        ...profile, streetAddress
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    as={Col}
                                    label={"Town/City"}
                                    placeholder={"TOWN/CITY"}
                                    id={"formGridTown"}    
                                    classStyle={"inputclass"}
                                    value={["Epe", "Lekki", "Alimosho", "Victoria Island", "Surulere", "Ikeja", "Ibeju-Lekki", "Oshodi"]}
                                    onchange={(townCity) => {setProfile({
                                        ...profile, townCity
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"State"}
                                    placeholder={"STATE"}
                                    id={"formGridState"}  
                                    classStyle={"inputclass"}
                                    value={["Lagos", "Ogun", "Imo", "Anambra", "Osun", "Ekiti", "Ondo", "Edo", "Delta", "Kano", "Kaduna", "Katsina"]}
                                    onchange={(residenceState) => {setProfile({
                                        ...profile, residenceState
                                    })
                                    }}
                                /> 
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomForm 
                                    label={"Country"}
                                    placeholder={"COUNTRY"}
                                    id={"formGridCountry"}  
                                    classStyle={"inputclass"}
                                    value={["Nigeria", "USA", "UK", "Sweden", "Ghana", "Togo", "Indonesia", "Poland", "Finland"]}
                                    onchange={(country) => {setProfile({
                                        ...profile, country
                                    })
                                    }}
                                /> 
                            </Col>
                        </Row>
                        <Row className="gx-5 mt-5">
                            <Col xs={6}>
                                <Button 
                                    variant="outline-primary" 
                                    className="w-100 inputclass"
                                    onClick={() => {
                                        navigate(getStartedRoutes.testIntegration)
                                    }}
                                >
                                    BACK
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button 
                                    className="w-100 inputclass"
                                    onClick={handleSubmit} 
                                >
                                    SAVE CHANGES
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}