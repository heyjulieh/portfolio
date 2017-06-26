import React, { Component } from 'react';
import './index.css';
import $ from 'jquery';
import Nav from './components/Nav';

class Aboutme extends Component {
  render() {
    return (
      <div className="Aboutme">
        <div className="jumbotron">
          <div className="pull-right">
            <div className="logo">
              <p className="logo-text">J:\ </p>
              <span className="glyphicon glyphicon-menu-right"></span>
              <p className="logo-text">_ </p>
            </div>
          </div>
          <div className="title">
            <a className="title-header animated fadeIn" href='/'><h1 className="title-header">Hi, I&rsquo;m Julie!</h1></a>
            <p className="title-text">
              I&rsquo;m A Front-End Web Developer!
            </p>
          </div>
        </div>
        <Nav />
        <div className="aboutme container-fluid">
          <h1 className="aboutme-title">top things you should know about me</h1>
          <div className="row aboutcontent">
            <div className="about container-fluid">
              <div className="myimg col col-sm-3 col-md-3 col-lg-3">
                <img className="myimg img-circle img-responsive center-block" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/16999243_10104945006214761_7796279694911484754_n.jpg?oh=2526324c9f1f6960007644b912a939aa&oe=59C8E6DB"/>
                <img id="aboutimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/_XwItA6jxLxG-zSYWkqhKtQKuGzt1mD1Mx-OeRLV_nkwx20z9myM__qQulYbFMwuGii2wnvn5vxTu67e2W2c1lB9CGPXcIdFCMtTDnAapH5soII34h7m5jhrXSaubjfUcRtZu9wrEI2AE03H9xSX-u2rcUIzAYJnHZqXd2ofFdPf98qcnd-fnQooXF3YlaJT3b6BmaoS8BRLOJ4r3QrR_uaZrTz_0dOqDv3EFURIrNAXllcJl32-g6QeSMKMsOS7q6IzjoRUdZDACfxQbdjntI_2wKCKMdF2H1PUVsjDHfM0C-NJamz7gknS1sreL2apyY7_rXoC0wlli63hGrKR3wVqRjtUtR0iIlHTqby5_UgH57fQyjCqfUwhfYKbVMR7c_RuP3SemJDlXh5EBUwc_vT6VS4f63p3A2BCLPuqdgVHOzSvUUD13SI-44qrcVWcvL--K05SzrsVzXA0uRGPwQCuhIXaIAnd55aL4ZLMGi821TyDi5TmPULZsO1kINuyVTuzo82AK85TvpalH8J2i_dZEEsyf2-jMiF6fAYJ47BUdICRoj6Bomtk_G7RrAjX9-6DgoD5OxL3X_rLi1v_FoOeJCr9XlU_XpAKlUrr-TI_cnyX=w1180-h1182-no"/>
                <img id="aboutimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/UFk94iVW9vld-0tjqPXGlOuRK7rZTcJo1stKnItFJZmCDMkr-lmkeXSK2BwmMLuYH2uMn4r2qeXY0IZ1tPdxlRlVHl4bAwB05E_KGOwEBFJd772L5Df4H-sDyllkz7oBB4qZLf1GSpcx5x8TUyJqtHcTKLOQuPA24QKLS5ayNEc9ki6gOTj538-mlhRGy0Agl9--9GBUkRc_Mmpgx-Xp0gJp0Ds5JmxsLT9LJrF_GBGSPSN0mDFKLgOmQ7H9l7xGLzz-clPu8WLQjjC7dGN_UX3SZ_oqCTFLDwzpyELimZ9t0xNXnmk1VjqfgaxAFXDvdWl0akRJtFemiUM0wwCkGoe4WXKVSiAq-8sil0g6ACT4yRLT-da_KyzTnZ6lHFyLRlCeUxI3ZgF_iI3aJYETO5-TpdylpWSSrTSBv6WYsdUG998UvqxyDmn1ntBSEf78_WWL0O3ykac3htaDgfQZeXqA5UVD8T57fpoHIc0rSHsu70K0ptIWWK1Syu_SWiK3K5JOtht5tu0knaSDoQxYQogYw1dJb4yOFrtNvBepi9DOZDdcKxyGptNhWKsZUDEh3l9z6xOVxTVoSq-2rdxrZkVQfM84kNA-96f3gnOwYGcUey9Gr46O=w1176-h1190-no"/>
                <img id="plusimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/ekHtfH5IW4VGl6PcekStpO5lQJO3dGt_dXYdr9OPFtxrCOHWzhaBCJ1aiElCtzUuVodSKl0QjAMCJXg78r1WsdhnhUZlnvDOGb_Sho0Y8ykvu1bF0U_AZGgMqQSBFAvYg5OxcfN0OD88OjRs3cxL_Bnd_dGZfW8ulbXxW0P0f5xUQEgUjBTs1yedp2lONc-xjrQWBvh0Bp0HZhfMFGwT-n1-kenGw7RtRt1KMvgaTbpOEraPW6vyiFY2eFvb4Eavy6B5dLBHXfCXWxKZtBT6O_DgxZ51N_kXzQ8JC6JCF12mkpKLFFb-3Qd0XaCPicxCie2pQRmdSRKii3AFFWABRp8IxDZAovcrzK7aOaEDms-bVoSreYro-TVLw8xyq93tiqo__wrHFgodcmzV5F0HPSrOpayrUEIdrCDZlB9cXn79JFGTzlEP69b5cD1-r2_f_jCZPxOd98nHb2RsliPILfGfI_pEoQK6_H46Vrv5OvrMOTLhFt_NZQ7Km5V2bMg26LD2upxBdYPaLvF2XBE7sWPTvIZupplqURKuG23Yl9SvqWLbKKKIoEUn0aFNy3B9XaQ8sG7oG2Aqi9fO7NqBOo02XamKQsgYH378BVv9NeS6fgR2Ug4k=s978-no"/>
                <img id="plusimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/xYyX10nYN5MgtE7ZcpZWcTsHFXCEuRchgG3AFdGH0d8ZsrcHM18f5tQX2liU31oRNXtzTBqcdy3phV_Gdr95NOszBw7qn4jgLcj9rvokkrX1H-VkwwLD-MJzP1xqR1kPhnfgo4oW8zmG_efvVonHxwbC8h3NhIbuH1HeJhV4hK8Yi4IKpPFVMyPRepqAIPU20408Rvcq8lOIVgqv1WnzW4JBqHeMbxGcYmXPVLDSTDgJasKXKrQtFgucnx8Ux8yggaDWhzMdYJ167rDRYxiQmb7VWBQasEdoGvBKE0HLISOKftCbGBTMhcYBEU0mjoiYW16jSIetqrLQKF_nHl--r0R8Z64zBrkLtgnLLfD2x_JTf2bX8HuZSTjhMUhmDy4HXNictJo3GGkkwLKGp1ADHwAWPw4o6QWKOyFFrNHCDMzzaljPATRvAfMflg1rYYHK4-J5oQp2RP8thiohVICxznQgeQfwADLiTgz822JpVwka9pQtiIXh8HQ-S3qpVDhpT_G0YgS3AqyFTtAyPR8_YayFsxcfx9nf4YitsmO6bwWIQExFwC80okhgzlJB0mKsyKwd4rfUfG-FjhZkOGwiRK-xLsCCB86k7QaiHcUR9pVaiaWM=w1180-h1182-no"/>
                <img id="extraimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/0tmlEbRmXedpxnGN5qBHniT-YoigHk-pr7f2kDzAqoOQKZQU-gtdh12W04Ofe_wKYmFQvpYyNV1KM4cF6wxFzLva2R2FN2KBGYbFLr5MrypL62HrplX2vg80fuqgKMrfOS9yGFbE4pVHNYDjtCr4K1kkzPlOdX2NpCY3EhSIU-uipBNRbPnOYQweUFu3XL6xUu_UvLmMY51CfNkbmASNcNBTcTscRIMvQfAbh9KnCrTTQ5AQOxEt-hsHZOkzemJjtB9fGPEva6qHsPS2ThcFq-IidoxIxuTK00EyZsIOiVnGNQbTRYhmu4BaB0GZJHq2M0Px4h7v3pzqb_HIVtFlU0hXjnpxFG9_Yb6iIqowUwChyEUd0i_VcfC0rStQe76zAg208l7W07gt_SbAMrwFtLE_mUNYbUJoHo0HfZjWC0unEVUEdVPLn1qopaoEajs20x_9fsEkmsN_7BQnPndsa5tKqnhRw2DL4iOa4E0OMi0yIBD9YrWwnTj8V89zaeI02mueGS_tLvgQcTeXrOGeQvaWit2dfcJAPv6tIjlm4m6SkJzTbA7tcBr-QyVoSRcy0Ff90K-wK6vxwJyTLoi0mA1HGlAiOQWMR8bu0oaewN6r3iXb=s860-no"/>
                <img id="extraimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/byC_DNuv6oz-zAZJ5dFUQid7oxnUKc2XJ62CcqD8feth35sXVKGITMzxGFiuhcNNzcog2sutvw84jbvtjfhUzCNs0EsnXwcV1PCpssTVXKLtjIkmcoyqhTt41unvGfn8LeJT0dKQbXdiaSXwJDoJcLbOt0LzyqGkOySIoh_4wEVoH1kfSkrGs-rDjfIe3gZy9XL1pMeNp_-QzzkaLCQGdObxoiOIpO1-qMNfsLrx4rpreHTcTWMgTqHzaPvhuEXEc9koPm5388acT_pIk7Yj4Eyl1UdtBnGcpCFBF9Mf-ueldEm7-20e4DjCwnnWtQI6WltrBzDf1shIlJSuAWG2wFMGl4m9bc8jVKPfrLU37A_5LWvEDbUAXryb8DDxesdFuL_uJ0sPMPLAm8mFqQqIucYA1ijtGebCA4_4YTK_V7_w5afrB77-PQDdQALPGLZOH0XYYWRkuH0khR3cmxAATjdAeOeI4aPGdAKDoei_0MBmpKYrukLnY_2gfF2YZSBAQ9iZo9OjYfhRqc2EcbaI0aDbi2z-ArUK9vz-HPUkrHvq-HphzTve-r0YIF3yhNSa7lvn4pD9akXRt-HMDB8qxQBh5E8P4d68JJKQhi80zs5CWkMkowmQ=w880-h862-no"/>
                <img id="extraimg" className="aboutimg img-circle img-responsive center-block" src="https://lh3.googleusercontent.com/QdguuBtjxEPvBBAyuQrqLF0-Ua2tJ_MDpBNZwTh8xJhZmjBb0SRxeoXOQOqDNUCiRKEPVK8r9BTi0iuwiQ8slUCbjtZtovJA4L5ronL2xGEBrMugOZqkhr1f39ofKRz7Zr5hfDkBvo3JvSQ20G3uZTob43PpQOkM1FiADBHwlIhoOGzbkxpfoASwnkiJw1b3wS3TFtUzNOK9Y4GXquWcY88XYvrNBm67xLXV3sIbs0xXQMli9k9GuvQ6ShbJHQcvt0EpM21VR0YBslkCpNlFaTWee32U_fOzNq7f3_pNQRwkBMSilyTPRIUZObv2HFdcnCJoFAAttMEJMR2XW8RePVQlTa_91-t-Ii413cl0oFHVOYyJgeEYTG47Lib7CxXae_vNZgsAIcdtIpljKW4xNSs93BUDB4ZIF-INQju1ZdDXiOaR_2DAD8SpA4LOBRiGFL-ZvE1nxmXJr3csGKq3NqCczJNz1Guj5iuXec6oNv2OZbNU1BjmqvrO_KAUIa3Fkq2YqmjdXYheHD2m95f_szKGm0dZK0cGvwARsB9qYc_OMesK8OvmSFtAhT167CmhQfY1sVZnUmdAASmW4_V27fpoVEh8-T-UJdNNlVMD-nsrupR3qYDK=s1176-no"/>

              </div>
              <div className="aboutme-blurb col col-sm-9 col-md-9 col-lg-9">
                <h3 className="aboutme-blurb">personally</h3>
                <p className="aboutme-blurb">01. I am originally from Los Angeles but my home is now Oakland.</p>
                <p className="aboutme-blurb">02. I make maps, icons, flyers, and lots of lists (i.e. traveling, food, packing, etc.).</p>
                <p className="aboutme-blurb">03. I have two Silver Martin bunnies named Cole & Sid.</p>
                <p className="aboutme-blurb">04. I love museums and visit at least one in every city I travel to.</p>
                <p className="aboutme-blurb">05. My favorite kinds of food involve a lot of cilantro, chillies, basil, and garlic.</p>
                <p className="aboutme-blurb">06. I own a collection of instant film cameras and cute calculators.</p>
                <p className="aboutme-blurb">07. I enjoy taking pictures of skies, buildings, and of course, food. </p><br></br>

                <h3 className="aboutme-blurb">professionally</h3>
                <p className="aboutme-blurb">01. I am well versed in CSS/SASS, HTML/Haml, JS, and Ruby.</p>
                <p className="aboutme-blurb">02. I am more inclined to use Bootstrap over Materialize-- but can work with either.</p>
                <p className="aboutme-blurb">03. I have worked with Angular, React, Rails, JQuery, API.</p>
                <p className="aboutme-blurb">04. I am trained in full-stack web dev with more strengths/affinity toward front-end.</p>
                <p className="aboutme-blurb">05. My text editor of choice is Atom.</p>
                <p className="aboutme-blurb">06. I like making websites/apps that seem simple but are, of course, not.</p>
                <p className="aboutme-blurb">07. Beauty, interactivity, and usability are the things I believe websites should all have.</p><br></br><br></br>

                <p className="linkto-resume">For more professional info about me, see my <a className="linkto-resume" href="/resume">resume</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
