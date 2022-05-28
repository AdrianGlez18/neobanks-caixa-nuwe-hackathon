// Packages
import SEO from 'react-seo-component';

//Data
import { title, description, titleTemplate, siteLanguage, siteLocale, pathname, twitterUsername } from '../../data/SiteMetadata';


const HomePageSEO = () => {
    return (
        <SEO title={title}
            titleTemplate={titleTemplate}
            description={description || ''}
            pathname={pathname}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitterUsername} />
    )
}

export default HomePageSEO;