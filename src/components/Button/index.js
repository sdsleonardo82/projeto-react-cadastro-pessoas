import React from "react";

import { Button as ContainerButton} from "./styles";

function Button({children, ...propos }){

    return <ContainerButton{...propos}>{children}</ContainerButton>
}

export default Button