import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

const Layout = ({ children, intl }) => <>{children}</>

export default injectIntl(Layout)
