import { StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './components/landingpage.jsx'

import LoginPage from './components/login.jsx'
import SignupPage from './components/Signup.jsx'
import Testimonials from './components/Testimonials.jsx'
import AboutUs from './components/Aboyus.jsx'
import HomePage from './components/Homepage.jsx'
import PricingPlans from './components/Pricing.jsx'
import SingleImagePricing from './components/Singlepricingimage.jsx'
import SingleDocumentPricing from './components/Singledocumentpricing.jsx'
import Uploadingimage from './components/Uploadimage.jsx'
import PaymentPage from './components/Payment.jsx'
import Carousel from './components/Extra.jsx'
import PrivacyPolicy from './components/Privacy&privacy.jsx'
import ParallaxSections from './components/ParalaxSection.jsx'
import ResultPage from './components/Result.jsx'


// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//      <Route path='/' element={<Layout />}>
//     <Route path='/' element={<LandingPage />}/>
//     <Route path='/About' element={<AboutUs />}/>
//      </Route>

//     <Route path='/login' element={<LoginPage />}/>
//     <Route path='/signup' element={<SignupPage />}/>


//     </>
//   )
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>

        <Route index element={
          <>
            <LandingPage />
            {/* <ParallaxSections /> */}
            <Testimonials />
            <HomePage />
            <Carousel />
          </>

        } />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Pricing' element={<PricingPlans />} />
        <Route path='/singleimagepricing' element={<SingleImagePricing />} />
        <Route path='/uploadingimage' element={<Uploadingimage />} />
        <Route path='/singledocument' element={<SingleDocumentPricing />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/Payment' element={<PaymentPage />} />
        <Route path='/Privacy' element={<PrivacyPolicy />} />
        <Route path='/Result' element={<ResultPage />} />


      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />


    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
