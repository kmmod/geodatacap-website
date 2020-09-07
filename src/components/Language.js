import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  pl: "PL",
}

const Language = () => (
  <>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: currentLocale === language ? `black` : `grey`,
              cursor: `pointer`,
            }}
          >
            {languageName[language]}
          </button>
        ))
      }
    </IntlContextConsumer>
  </>
)

export default Language
