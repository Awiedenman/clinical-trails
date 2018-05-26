import mockSearchData from '../mockData';
import searchDataCleaner from './cleaner';

describe('searchDataCleaner', () => {

  it('returns a cleaned array when given data', () => {
    const expected = [{
          public_title: "Comparing different diagnostic tests to determine what back problem patients may have: A study protocol",
          brief_summary: "Background and study aims Musculoskeletal disorders (MSD) include different disorders such as osteoarthritis, rheumatoid arthritis, low back pain, neck pain and many more. They account for a large part of global disability and are predicted to increase over the next few years. Recent studies have stated that it is urgent to prevent and control the growth of musculoskeletal disorders by experts in this field; therefore there is a need for changes in the health system and research to understand the management and prevention of such MSD. There is a need to know whether people suffer from a certain “musculo-skeletal” health problem and what tests can be performed by clinicians to detect it in order to direct more research. The aim of this study is to evaluate the accurateness of using a mechanical chiropractic device using different diagnostic tests.  Who can participate? Adults aged 18 to 70 years old who have a history of back pain. What does the study involve? Participants who attend the clinic for back pain undergo two different tests. They first undergo an assessment of their muscles using the modified ankle rigidity test and a leg length inequality test using a motion capture device. They then undergo a chiropractic procedure using a mechanical device that is applied to their neck area. They then repeat the measurements. After this, they undergo an x-ray. The results from the tests are compared to the results from the x-ray to see if the are any differences.  What are the possible benefits and risks of participating? There are no notable benefits or risks with participating in this study.  Where is the study run from?  1. Centre Quiropràctica Girona (Spain) 2. Gabinet Mèdic de Diagnosi i Tractament: GD mèdic Girona (Spain) When is the study starting and how long is it expected to run for?  March 2017 to December 2018 Who is funding the study? Investigator initiated and funded (Spain) Who is the main contact? Dr Joaquin Valdivia Tor migdiaquiro@gmail.com",
          target_sample_size: 50,
          gender: "both",
          registration_date: "2017-05-24T00:00:00.000Z",
          locations: [{
                id: "33a2251a-1a43-44ca-ac7d-f7e8d183d33d",
                name: "Spain",
                type: "country",
                role: "recruitment_countries",
                name: "Dr Joaquin Valdivia Tor"
    }],
  })

})