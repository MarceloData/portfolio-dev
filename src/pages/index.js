import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config/siteInfo';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="hello-world"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Canva Designer que posta muitas groselhas no Twitter e gosta de JavaScript. Integrante
            de comunidades (de tecnologia ou não) e ama facilitar a vida de devs iniciantes (dev sandy e 
            dev junior).

          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência Profissional</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Empresa XPTO</div>
              <p>
                Desenvolvimento de aplicações web front end com React e Gatsby. Também 
                desenvolve serviços no back-end com Kotlin e contribui com a guild front-end 
                na iniciativa de Design System.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto/2015 - atual</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front-End Developer</h3>
              <div className="subheading mb-3">Empresa ABCD</div>
              <p>
                Liderança do grupo de front-end, desenvolvimento de aplicativos nativos com Swift,
                experiência com Angular e Vue.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Maio/2010 - Agosto/2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Webmaster</h3>
              <div className="subheading mb-3">Agência MuitoEu</div>
              <p>
                Desenvolvimento de sites, landing pages e peças publicitárias.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro/2007 - Maio/2010 </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">UniCanva</h3>
              <div className="subheading mb-3">Canva Designer</div>
              <div>Bacharelado em Design de Canva</div>
              <p>GPU: 7.68</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto/2018 - Dezembro/2020</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Linguagens &amp; Ferramentas
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Conhecimentos específicos</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsividade
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Times multidisciplinares
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Metodologias ágeis
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            Artesanato, arquitetura, Design, fotografia e cultura pop.
            Estes são meus interesses para além somente do profissional.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Prêmios  &amp; Certificações</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              MVP Tecnologias Front-End 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Awwwards Nominee 2014
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Developer Expert Front-End
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
