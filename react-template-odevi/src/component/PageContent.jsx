import React from 'react'
import PageSection from './PageSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ImageLocationMapSection from './ImageLocationMapSection'

function PageContent() {
  return (
  <>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    <PageSection/>
    <AboutSection/>
    <ContactSection/>
    <ImageLocationMapSection/>
  </div>
</>
  )
}

export default PageContent