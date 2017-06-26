import React, {Component} from 'react';
import $ from 'jquery';


class Landing extends Component {
  constructor(props){
      super(props);
      this.state = {
         imgSrc1: 'https://lh3.googleusercontent.com/E4KzHNsGTLPZ-3aMzClOu8Mrx4CsojY-VAPxbZ4t3h9xCIGsvu0ZKPXtGpApam9iq18FfjQxbBl9N__L9V1lijEeJNn9cNTE2GlLz2SyTVjTZ_68_BGmVi_X20Iae4Tb2Lr_O-Bz2Jxci4ue8cpSosvJw35QdNZgjFSGR77slh1ZLs39jzAkQd6iqRYBkjO9HZhJU4XrYJ4NnoCYs8gB9_xG-7OS63XhUgjfsPqR80oqVBcOQckQKNeszkWEay_mYPOk-HadJf3KAOtJbvVNRPXIPpRUI-pYAjyiKta2NoqYAikyiwiCubhKGRzg0Koqddc5FIIS22ZHw4U7fgcanucy6GqbE0Ld0Mxci6YgrxFJ5fu8BXSYM7ZUYLw2-kedsN0Ybkz5DLYCj_SFOH24mWO3wEQ94rvf0cuGoPxaKYBdBHV_ffGYD37fGEBWN8X01sCn0en1I9PSljfnBP1jdL57dELnDsWhxrp5k1y4InVAHciAq7XiOzDyaOpDT539RTsntjiu6xzhhvhzs319sGKn8JN_F48XJ0fR4v4psevbn2sxE0evQ-xzhoIRse11-hzZYywkzZ9YiU7WDl0if5ec9iwUtHkFhEFTbHzdRbxxrC9ma4aj=w2160-h1212-no',
         imgSrc2: 'https://lh3.googleusercontent.com/lK_MWEsNcVaDApuq3shDbWWGcxKlwSvyzopKws7MqogByN0Dej2E1XLXyeb27evDId9NuNQRo9fpgtpBq_DiwZlLMXaRtNRgUphoc_raZ6KSj7myVKm9J9fQwpJqYKLWy10zdamIA7cf8hUdP_a2-ANYwceD43Ht42u4vdVGZNsFHxlEMhMjcX_c68ItFPOKE5Vesw7hqGwh5MxRFzfY6zAfkSakg9nu-mXLonDzhJHm6zMzuSnC5ALeVZ2umfs6scqcBi1mlKeHstBWhQCi5-aiujVHSz2Q1kuCbBnuBuLDdlxGhSq9DSz2wLSWm7uLOqDr9CwwupcpyhRvOOY8lz-QGddz9hlf2DlpMdHJuhWAWiem9QrbHEnZOF2TKK2t3GZoQkBWJv_aYpKR8XmKfZgI03YWke-EDv9lHH53_QX0LRRljKa396yGkURryUNOo0IS3kjpXTjQx0-Ph26Du2N1sdU_mE-6jlZN7YmGW1-VBhX0vZg1v7C3ZJqS8q5cqwhxpMjmppmexld8PT1yywxLEv9wZtiWbYXVNvST1p-w4FBDeSb87-QDEdtW5hnYYpXRbHHZJnBJJedDp4zE6ImbhT-ClLdNptBLFWPu4pI_kBqL=w2160-h1204-no',
         imgSrc3: 'https://lh3.googleusercontent.com/elw3EiRoZbsXpAnfG09cnLtH37Rb00SscU1VwVgHwY7c2hoPaOz_tpFUU6GtPZKea2EGNycXW13S6zOm0nIsKYPyBo-Dy-4n9j9jjaZylF4vOatYucnxSrFo2XrdfUqW89tphFysewgoA0T4oBbwuRwxW6uA19dlR1tSw5S-BWgiupnTBhQsLu_tS4E6kPkVRSd7gEzKPd-cnPXMLW0kiOBQGc7EMxwdOb-owoBKQXXZl_neHPfluUBQ6gMqTSMMKx5ukT0mZ3tsnMNgLAIp3vSe-H97ZzCVduPZqhq83Q2A_gwZ4zonFmFGP3ovcAUyhY1botBSpXW7QFUxQ0xvU7uStbtaL9LPaXK8HZj9FqWkZNz0VS2X3F8alDhj59sQ0mZp0M88FJkAAPKGhD6IPPVH5tg44KpkfVweiYDyQu6ljtrrEHON6__sHG81FW4fqVtC8ObWDFEQoz_K8kTUwMYsypGddd36jR6YnNNP6KY5BmETjXF3amWMuk_1T4DqZulIsb4SxF-tjKKmARRH-ZPMFrRH4qp0KNlbzZrfhNqX88d1mPItbjo8tjMTSjm396xCSqFvSlztKImqmeUpbJqgTFgauyBsuf3Sxs2PWoAwbdJcJjbj=w2160-h1188-no',
         imgSrc4: 'https://lh3.googleusercontent.com/ujDLVoCRoqYgg9cD6QtaSwiog_n27M4S1lMNHUyBSp_SWBsosI1_QEAb8hcusR_K7t-iQf0BtT261m1E_qG6LIXMFgrkOTwMST_i28yN2IguDc39NNlkaHoP-0gUbKRBkxuxiMDXy7TKAYsHQJrb72dfacuZ7vs3rAlXT0XYaujNE7TvT9ugkyGur77iypgvdaZEzDOHoC921qfmf2AlY7yH5DMlrXk0EASSbidrhyFt9c3lAdwECjfqlUUyGV8Fi72DQHnzx1iO7DnVTBZird-VbeuLlPd9525VeVlpUhMjFdYFSrFJAlyrTyvC6AegQji9Bg2VfvzxZUKlDTbsK9NqANegFomUGBmpguQ-_px4ir6nVz2q3weWtY7tuV0EvDzdizPSwD2tQWnRqMvaa1F_6_Cn3X1TDKeFeebtxogvncCT55YFMILkeDOS0ji00YILp1LlJ2HxyO7zbBKfDfRO27eglP_GsdghhqbNl2QxBxpxpbRIbPA6COLDohmswOPvefV0HNKKBn1jy1Mx2bVLvpbx5mv07-RVBkHFkyLU7eAEhVr3WMvKnWdYr8mnI5XfjFDX9O42bnr4Zake_WwJn89REcr9xcumOH2ZdOrl7orr=w2160-h1058-no'
      };
      this.handleMouseOver1 = this.handleMouseOver1.bind(this);
      this.handleMouseOut1 = this.handleMouseOut1.bind(this);
      this.handleMouseOver2 = this.handleMouseOver2.bind(this);
      this.handleMouseOut2 = this.handleMouseOut2.bind(this);
      this.handleMouseOver3 = this.handleMouseOver3.bind(this);
      this.handleMouseOut3 = this.handleMouseOut3.bind(this);
      this.handleMouseOver4 = this.handleMouseOver4.bind(this);
      this.handleMouseOut4 = this.handleMouseOut4.bind(this);
    }

    handleMouseOver1(){
      this.setState({
        imgSrc1: 'https://lh3.googleusercontent.com/5dThRl8iSFTw3dM8iD_bKpEweOcGltcHIq7L1gMNvByU_BcaNm3axPtUoA299Hak6z9LZQEgQtLZDOREug4D3cBxbZzKv2wUfyy-pdLjmSC6HeGf5UEUGf1ZvGMb8h2Mg1KKoZuHjegyRmyKxlxADqMhg5a7on7nl1gt11Fy-5b8tmVLVYOAnj10AmTjn5SBLkdk_1vA_eqhWd_BVG5Ys05HRxJ1o5FoyetKHIdzVLHvztKqFEkpgrgnkw9Mub3hkmblnlT7iz-j556kAw-yxAuZX3c-tMVCWXRGBdZdb-bjumcZnhEfJJQGnck9-WLBa2ByY4Q23B3bWaLBGE2qwKC0ejEmWs3AhWnn_zt9MRcJEzdm0YSkQKfTA91lCiVrwGDQq1WZPcqK3dOLnJ7vogxync3lW9CsJ-Cz26DFyEMJQvkagNG4iecUI7nmG0WU5gc2-RnWm5OYbeqkWR8BMCxgHZuk-ziqne-d91VyYfjP3qHJtnyMq6ap0b0iOTUL-nGlfTi4JY8MuuAdCoEnA1M5ZzjYQrpECfIk8U65G6MjLINZNZjIo2M_e8OOtRcycRneW1_f0NP1ZDaVCNmZT1e3gaayu4QFxD9y7OVhursE5YfL=w2160-h1216-no',
      });
    }

    handleMouseOut1(){
      this.setState({
        imgSrc1: 'https://lh3.googleusercontent.com/E4KzHNsGTLPZ-3aMzClOu8Mrx4CsojY-VAPxbZ4t3h9xCIGsvu0ZKPXtGpApam9iq18FfjQxbBl9N__L9V1lijEeJNn9cNTE2GlLz2SyTVjTZ_68_BGmVi_X20Iae4Tb2Lr_O-Bz2Jxci4ue8cpSosvJw35QdNZgjFSGR77slh1ZLs39jzAkQd6iqRYBkjO9HZhJU4XrYJ4NnoCYs8gB9_xG-7OS63XhUgjfsPqR80oqVBcOQckQKNeszkWEay_mYPOk-HadJf3KAOtJbvVNRPXIPpRUI-pYAjyiKta2NoqYAikyiwiCubhKGRzg0Koqddc5FIIS22ZHw4U7fgcanucy6GqbE0Ld0Mxci6YgrxFJ5fu8BXSYM7ZUYLw2-kedsN0Ybkz5DLYCj_SFOH24mWO3wEQ94rvf0cuGoPxaKYBdBHV_ffGYD37fGEBWN8X01sCn0en1I9PSljfnBP1jdL57dELnDsWhxrp5k1y4InVAHciAq7XiOzDyaOpDT539RTsntjiu6xzhhvhzs319sGKn8JN_F48XJ0fR4v4psevbn2sxE0evQ-xzhoIRse11-hzZYywkzZ9YiU7WDl0if5ec9iwUtHkFhEFTbHzdRbxxrC9ma4aj=w2160-h1212-no',
      });
    }
    handleMouseOver2(){
      this.setState({
        imgSrc2: 'https://lh3.googleusercontent.com/r4zHr0Jw5sv-_t69IWzkkF7SzduCf_oEIPdikmPMzbNocPkg8P04gAt5w5KpeeRv0r_j-GvmrylIY4ehICDIAMpc2-c8KZRbwH-UhcouVt6wupsV7aq_0GTnC0NrCYnP-pi-grfmRCLQWGQx2MXV27F74kAfaOD--hZhHRg5H0Q1TsA_TQuhXNd5Qkib6QPdikVJptjO8v0fJnak84o1GmDTsIs6JVYHSqoiE-oEEjC3XVER-h8_QeU8u4QOlHcvxDOgm2UY58WOcu6-2uePRBDCHxSrLz-turZHctR-aSWm4ADs55ZphRkldYQ_7XJ8_kK3v_czjrauIiNgNXbkafs5Nwv0WCJK6Gr4BNLE5UnxoYG2ilpbcwnnFH3roKz2Q_07lq5Fj0ai5YpcSIuHY7g2A6FnHb2maeIZ0gIsCfmVBDDx24UQXaADt0qqD-l8vSYBkdxuRO84aZOyvzFdQb6Zpr9HrBK8uokc8iUppe1NF8DsOUPUXKFgmbZZZIFzHj1Pn12NiRPg_kIyO56cCtcB-tkQw6yp3h3ctQtgFYwvmx_8xi8JGUUuPS-liUFhPeMbHbzexQdN4b0Wr2P-SPJnEEcMVMF4dvMd1PyMDmf9ByvTFfo2=w2160-h1220-no',
      });
    }

    handleMouseOut2(){
      this.setState({
        imgSrc2: 'https://lh3.googleusercontent.com/lK_MWEsNcVaDApuq3shDbWWGcxKlwSvyzopKws7MqogByN0Dej2E1XLXyeb27evDId9NuNQRo9fpgtpBq_DiwZlLMXaRtNRgUphoc_raZ6KSj7myVKm9J9fQwpJqYKLWy10zdamIA7cf8hUdP_a2-ANYwceD43Ht42u4vdVGZNsFHxlEMhMjcX_c68ItFPOKE5Vesw7hqGwh5MxRFzfY6zAfkSakg9nu-mXLonDzhJHm6zMzuSnC5ALeVZ2umfs6scqcBi1mlKeHstBWhQCi5-aiujVHSz2Q1kuCbBnuBuLDdlxGhSq9DSz2wLSWm7uLOqDr9CwwupcpyhRvOOY8lz-QGddz9hlf2DlpMdHJuhWAWiem9QrbHEnZOF2TKK2t3GZoQkBWJv_aYpKR8XmKfZgI03YWke-EDv9lHH53_QX0LRRljKa396yGkURryUNOo0IS3kjpXTjQx0-Ph26Du2N1sdU_mE-6jlZN7YmGW1-VBhX0vZg1v7C3ZJqS8q5cqwhxpMjmppmexld8PT1yywxLEv9wZtiWbYXVNvST1p-w4FBDeSb87-QDEdtW5hnYYpXRbHHZJnBJJedDp4zE6ImbhT-ClLdNptBLFWPu4pI_kBqL=w2160-h1204-no',
      });
    }
    handleMouseOver3(){
      this.setState({
        imgSrc3: 'https://lh3.googleusercontent.com/dQhbeOgNOqAZpGNp2C-papt7-hOHnnj6QW6o9Vn0Mmvw6Jwsw2o0pJL0lJzp4LpiqKHejnWkQRvfODumKGRnm9PstM3ZvcHWm0fpledk8ANM4qs1dylluOqGWPd_sZFUdgPm87n5odK9LYMqrewXhLoneVd5okDWST3LS0ASKUew9mPdSDGiOMcuKlBogfO6Ex1afHCi7wgZQmvaDNFanYfoLD2Ta3aH7eto6hqOz6YgyrNtiKGcIX3VCPiKq5RkOOqRrM0ZP5MvMj6f-OuMMbnneW0ZrntpWC09ZekyyW3PWO_iO4hayytWLLX99FQrNbS6_8O3wHbr2FH_faT3p3s4d9WJI5EcQ9yidkUEtn8JglcT4z1nwVVHtzzspfyNEZ9UyloKqqrxyGjNj3S8Spt0UhdCa8Zuv9pjSWfy36yxb1Rt2ptMtlD_jDD2jRsmwfNlVXmL56GD3BXdz_1AUFNRnFgFyTDsMQ-QryHVa5CfHVkQ0smt1ufIiRBrp7SIfPUyOdMFfh2vHVktWOP9wfi_gehtsjA0TaDosJu-ToSnI6nxFHslbClyUID7mukmiSnJHOV-RY5samoRGFX6Yu1yMD0F063VC6v-5PGYrbxV95Fd=w2160-h1186-no',
      });
    }

    handleMouseOut3(){
      this.setState({
        imgSrc3: 'https://lh3.googleusercontent.com/elw3EiRoZbsXpAnfG09cnLtH37Rb00SscU1VwVgHwY7c2hoPaOz_tpFUU6GtPZKea2EGNycXW13S6zOm0nIsKYPyBo-Dy-4n9j9jjaZylF4vOatYucnxSrFo2XrdfUqW89tphFysewgoA0T4oBbwuRwxW6uA19dlR1tSw5S-BWgiupnTBhQsLu_tS4E6kPkVRSd7gEzKPd-cnPXMLW0kiOBQGc7EMxwdOb-owoBKQXXZl_neHPfluUBQ6gMqTSMMKx5ukT0mZ3tsnMNgLAIp3vSe-H97ZzCVduPZqhq83Q2A_gwZ4zonFmFGP3ovcAUyhY1botBSpXW7QFUxQ0xvU7uStbtaL9LPaXK8HZj9FqWkZNz0VS2X3F8alDhj59sQ0mZp0M88FJkAAPKGhD6IPPVH5tg44KpkfVweiYDyQu6ljtrrEHON6__sHG81FW4fqVtC8ObWDFEQoz_K8kTUwMYsypGddd36jR6YnNNP6KY5BmETjXF3amWMuk_1T4DqZulIsb4SxF-tjKKmARRH-ZPMFrRH4qp0KNlbzZrfhNqX88d1mPItbjo8tjMTSjm396xCSqFvSlztKImqmeUpbJqgTFgauyBsuf3Sxs2PWoAwbdJcJjbj=w2160-h1188-no',
      });
    }
    handleMouseOver4(){
      this.setState({
        imgSrc4: 'https://lh3.googleusercontent.com/SGxXPOMN28QZIVAlV3-QH-HavYE4o1pLV4WEgOjI8jtj8iviosVoC4zIM92lreDc7CYOtf1bKLuyfZ2X8G-6y2WXc9wno77fswwoNypgSxzWLnGOZ2OzWlD6en5iVIgFSKf2eL1UEQKck7RjrB2ek51SfIeKtD6Sg6nWbeESLY6qelTwCoNWvVsBmoCzZ4my3IexLieQJL82US2CfKG3YxDJITPbhY-N-V1F56bb2VBYLC_s9b3gSoUrJQ38mW3_0S41yJK3Yg38Qr9Wamp7cScdfE_kjwrQPoFKWg7HI_rxlHjCD-0Xi1yLUWWI6oCo9rlrIeItvW49BEzuQfCLhuuEv7S16zY1P5nH1z3WGaivo9Mt-8ZXGykKrr9s4BMItH0r_vHCkRDwai3d6BsKLiT3IDeagi2qpubNoDmrh8-N9geqInKA9WLuR84Svpz0MqwaGuvC9TL-akt0-s68MXsUAxHRrIVhK8P-wlhViFCcKN65_nQwBXTvV0MQ3BY4pkOZjTFw2qIuwK-RzELb2UD3aS7geCHELr8F75WoaT0iXGiJnx_K93ASaTdueFkJutsGKatrAR6yUto-XBM79-8blTHhbweML0-LS-bqo2kZQSWG=w2160-h1056-no',
      });
    }

    handleMouseOut4(){
      this.setState({
        imgSrc4: 'https://lh3.googleusercontent.com/ujDLVoCRoqYgg9cD6QtaSwiog_n27M4S1lMNHUyBSp_SWBsosI1_QEAb8hcusR_K7t-iQf0BtT261m1E_qG6LIXMFgrkOTwMST_i28yN2IguDc39NNlkaHoP-0gUbKRBkxuxiMDXy7TKAYsHQJrb72dfacuZ7vs3rAlXT0XYaujNE7TvT9ugkyGur77iypgvdaZEzDOHoC921qfmf2AlY7yH5DMlrXk0EASSbidrhyFt9c3lAdwECjfqlUUyGV8Fi72DQHnzx1iO7DnVTBZird-VbeuLlPd9525VeVlpUhMjFdYFSrFJAlyrTyvC6AegQji9Bg2VfvzxZUKlDTbsK9NqANegFomUGBmpguQ-_px4ir6nVz2q3weWtY7tuV0EvDzdizPSwD2tQWnRqMvaa1F_6_Cn3X1TDKeFeebtxogvncCT55YFMILkeDOS0ji00YILp1LlJ2HxyO7zbBKfDfRO27eglP_GsdghhqbNl2QxBxpxpbRIbPA6COLDohmswOPvefV0HNKKBn1jy1Mx2bVLvpbx5mv07-RVBkHFkyLU7eAEhVr3WMvKnWdYr8mnI5XfjFDX9O42bnr4Zake_WwJn89REcr9xcumOH2ZdOrl7orr=w2160-h1058-no',
      });
    }

  render() {
  		return(
        <div className="container landing">
          <div className="row">
            <div id="proj-div" className="proj col col-sm-12-md-6">
              <div className="proj-title pull-left">
                <p className="proj-title"><a className="proj-title" href="https://life-better.herokuapp.com/">lifebetter</a></p>
                  <span className="see-proj glyphicon glyphicon-menu-right" data-toggle="modal" data-target="#myModal1"></span>
                  <div className="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                          <h4 className="modal-title" id="myModalLabel">lifebetter</h4>
                        </div>
                        <div className="modal-body">
                        <a id="proj" href="https://life-better.herokuapp.com/"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1} src={this.state.imgSrc1}/></a>
                        <h2 className="modal-body">Description</h2>
                          <p className="modal-body">This project was done by me (Julie Huang) & three other General Assembly Web Dervelopment Immersive students (Addy Kumar, Michael Laird, and Jane Wie). The app was created to provide a platform/forum for people to share their life tips and discuss these tips. There are so many life tips that are not necessarily shared or displayed in an appealing way-- and we feel our app does.</p>
                        <h2 className="modal-body">My Role </h2>
                          <p className="modal-body">From wireframing, to seting up layouts for each page, I led and worked on the entirety of the front-end/client-facing aspects of this project. I used Ruby on Rails, Haml, SCSS, and Bootstrap, to render what users see on the page. I also assisted in routing/linking of our projects&rsquo; resources and came up with coding for the conditional rendering of components.</p>
                        <h2 className="modal-body">User Story</h2>
                          <p className="modal-body">Users of our web app will be able to see six genres of life tips created by signed-up users. From the six genres of life tips, users can select a genre and view, add, edit (their own), and rate the lifetips specific to the genre. Users are also able to add images to their tips via an uploader and update their user information (username, name, email, password, etc.). Tips with a large amount of "down-votes" will be removed from the site.</p>
                        <h2 className="modal-body">Future Additions</h2>
                          <p className="modal-body">In the future, we would like to make the app a bit more responsive, and come up with a better way to show the tips and the images attached. Additionally, we wanted to allow for commenting on the individual tips by all signed-up users.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div><br></br>
              <a id="proj" href="https://life-better.herokuapp.com/"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1} src={this.state.imgSrc1}/></a>
            </div>
            <div id="proj-div" className="proj col col-sm-12-md-6">
              <div className="proj-title pull-left">
                <p className="proj-title"><a className="proj-title" href="https://thawing-ocean-17046.herokuapp.com/">sneakerhub</a></p>
                <span className="see-proj glyphicon glyphicon-menu-right" data-toggle="modal" data-target="#myModal2"></span>
                <div className="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title" id="myModalLabel">sneakerhub</h4>
                      </div>
                      <div className="modal-body">
                      <a id="proj" href="https://thawing-ocean-17046.herokuapp.com/"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2} src={this.state.imgSrc2}/></a>
                      <h2 className="modal-body">Description</h2>
                        <p className="modal-body">This project was done by me (Julie Huang) & Kevin Tse, as part of General Assembly&rsquo;s Web Development Immersive Program. We both have a great interest in sneakers and felt that a web application that allowed sneaker lovers (such as ourselves) to come together to crowdsource/share their thoughts and resources on the hottest sneakers-- from the past and at present-- would be of great use personally, as well as for our friends who want to "cop the latest pair".</p>
                      <h2 className="modal-body">My Role </h2>
                        <p className="modal-body">I worked on the entirety of the front-end/client-facing aspects of this project. I used HTML, CSS, Javascript, JQuery, and Materialize to render what users see on the page. Additionally, I structured the backend by setting up the associated AJAX routes and creating API resources (which includes shoes-- their information and editor/recommender).</p>
                      <h2 className="modal-body">User Story</h2>
                        <p className="modal-body">Users of our web app will be able to see the editors&rsquo; top 25 sneaker picks. They will also be able to see pages about the editors, brands, and add/make recommendations toward the collection of shoes considered "hot". Users will also be able to edit and delete their shoe recommendations.</p>
                      <h2 className="modal-body">Future Additions</h2>
                        <p className="modal-body">In the future, we would like to use store location and/or brand location data to create an interactive map that shows users where they can get the shoes that are listed on the various pages of our web app. We would also like to add a search bar that allows users to look for shoes by brand and/or shoe name.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div><br></br>
              <a id="proj" href="https://thawing-ocean-17046.herokuapp.com/"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2} src={this.state.imgSrc2}/></a>
            </div>
          </div>
          <div className="row">
            <div id="proj-div" className="proj col-sm-12-md-6">
              <div className="proj-title pull-left">
                <p className="proj-title"><a className="proj-title" href="#">wayfarer</a></p>
                <span className="see-proj glyphicon glyphicon-menu-right" data-toggle="modal" data-target="#myModal3"></span>
                <div className="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title" id="myModalLabel">wayfarer</h4>
                      </div>
                      <div className="modal-body">
                      <a id="proj" href="#"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3} src={this.state.imgSrc3}/></a>
                      <h2 className="modal-body">Description</h2>
                        <p className="modal-body">This project was done by me (Julie Huang) & three other General Assembly Web Development Immersive students (Mahmoud Bachir, Will Fong, and Addy Kumar). This project was created to address a client&rsquo;s need to create a web app that would allow travelers to see the interesting things (recommended by users) to do in various cities across the world.</p>
                      <h2 className="modal-body">My Role </h2>
                        <p className="modal-body">I worked on the front-end portion of this project with one other team member. Specifically, I created/styled the nav bar, footer, buttons, forms, authentication/authorization, and landing page (minus the jumbotron/large welcome banner). I also worked on routing, basic set up of CRUD methods, and assisted in rendering API seed data to the various pages. We used CSS, HTML, Javascript, JQuery, React, Bootstrap, and Google Firebase on the front-end portion of the app. We used Express, Mongoose, and Node.js on the backend portion of this app.</p>
                      <h2 className="modal-body">User Story</h2>
                        <p className="modal-body">Users of Wayfarer will be able to see recommendations by other users of things to do in five cities across the world. Users will be able to login/logout via Google Firebase OAuth, and post/edit/delete recommendations. Users can read these recommendations by city, by user/author, or individually (by post Id).</p>
                      <h2 className="modal-body">Future Additions</h2>
                        <p className="modal-body">In the future, we would like to utilize more of the user information provided by Firebase and restrict access to posting/editing/deleting recommendations-- in that only users who authored the recommendations can edit or delete it. Additionally, we want to incorporate the ability to search recommendations (by city and author) in the nav bar. Finally, we would like to utilize friendlier web addresses for our posts (which currently include long unmemorable numbers).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div><br></br>
              <a id="proj" href="#"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3} src={this.state.imgSrc3}/></a>
            </div>
            <div id="proj-div" className="proj col-sm-12-md-6">
              <div className="proj-title pull-left">
                <p className="proj-title"><a className="proj-title" href="#">wox</a></p>
                <span className="see-proj glyphicon glyphicon-menu-right" data-toggle="modal" data-target="#myModal4"></span>
                <div className="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title" id="myModalLabel">wox</h4>
                      </div>
                      <div className="modal-body">
                      <a id="proj" href="#"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4} src={this.state.imgSrc4}/></a>
                        <h2 className="modal-body">Description</h2>
                          <p className="modal-body">This project was done solely by me (Julie Huang) as part of General Assembly&rsquo;s Web Development Immersive Program. This was my final project for the program. The project idea came from a combination of two things: my love of walking and the discussions I&rsquo;ve had with other millenials regarding the search & maintenance of relationships. The app is meant to provide recommendations on inspirational places to walk or view while also connecting individuals with one another through walking meetups (walkups) in an easy, personal, and non-stressful way.</p>
                        <h2 className="modal-body">My Role </h2>
                          <p className="modal-body">I worked on the entirety of this project by myself-- both frontend and backend. I used CSS, HTML, Javascript, JQuery, Bootstrap, Reactstrap, Mongoose, Express, Node.js, and Google Firebase to create this web app.</p>
                        <h2 className="modal-body">User Story</h2>
                          <p className="modal-body">Users of my web app will be able to view any walks added by users on one page, and walks specifically by user/author on another. Users will be able to login/logout through Firebase Oauth, and add/edit/delete recommendations for places to walk. Users logged in will be able to message one another about going on a walk and favorite walks that they want to partake in. Messages show up in their own respective pages specifically by user. Favorited walks show up on the associated user page.</p>
                        <h2 className="modal-body">Future Additions</h2>
                          <p className="modal-body">In the future, I would like to add functionality to favoriting and messaging. I would also like to have a calendar in the user profile page that shows all the walks they have set a date on. Lastly, I would want the count of unread messages to be reflected On an icon in the top-right corner of the page. This project was quite ambitious for a 1.5 week timeframe and hence, has a lot of work to be done!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div><br></br>
              <a id="proj" href="#"><img id="proj" className="proj animated pulse" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4} src={this.state.imgSrc4}/></a>
            </div>
          </div>
        </div>
      )
  }
}
export default Landing;
