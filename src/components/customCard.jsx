import { Card } from "react-bootstrap"

export const CustomCard = ({
    children,
    className
}
) =>{

    return(
        <Card 
            className={`mt-3 border-0 ${className}`}  
            style={{ boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px" }}
        >
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}