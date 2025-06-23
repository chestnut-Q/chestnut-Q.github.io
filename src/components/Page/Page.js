import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Page() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="about"
    >
      <Row
        style={{
          width: "100%",
          marginBottom: "1em",
          marginTop: "1em",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "2em",
            marginBottom: "1em",
            marginTop: "1em",
          }}
        >
          Ruoyu Qin
        </p>

        <Col md={9} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            About
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            Hi! I'm Ruoyu Qin (秦若愚). I am a first-year Ph.D. student in Department of Computer Science and Technology at Tsinghua University, working in the{" "}
            <a href="https://madsys.cs.tsinghua.edu.cn">
              MADSys Lab
            </a>{" "}
            under the supervision of Prof. <a href={"https://madsys.cs.tsinghua.edu.cn/author/mingxing-zhang/"}>Mingxing Zhang</a>. Prior to that, I received my Bachelor's degree in Computer Science and Technology, also from Tsinghua University.
          </p>
          <p style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            My research centers on efficient machine learning systems, with an emphasis on large-scale, distributed large language model (LLM) deployments. I’m driven by real-world industrial needs: I seek out practical challenges in areas like LLM serving and RL rollout, develop solutions, and push them all the way into production.
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Updates
          </p>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
            <ul>
              <li>
                (May 2025) I will be giving an oral presentation at the 28<sup>th</sup> Chinasys in Chongqing, China. [<a href="https://cnsys2025.cn">Website</a>]
              </li>
              <li>
                (February 2025) I will be giving an oral presentation at FAST&nbsp;2025 in Santa Clara, USA. [<a href="https://www.usenix.org/conference/fast25">Website</a>]
              </li>
            </ul>
          </div>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Publications
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot</b>
                {" "}
                <br />
                <u>
                  <b>Ruoyu Qin*</b>
                </u>
                , Zheming Li*, Weiran He, Jialei Cui, Feng Ren, Mingxing Zhang, Yongwei Wu, Weimin Zheng, Xinran Xu.
                (* indicates co-first author)
                <br />
                <b>Erik Riedel Best Paper Award!</b>
                <br />
                <b>FAST 2025</b> –{" "}
                <i>
                The 23rd USENIX Conference on File and Storage Technologies.
                </i>
                <br /> [
                <a href="https://www.usenix.org/system/files/fast25-qin.pdf">Paper</a>] [
                  <a href="https://github.com/kvcache-ai/Mooncake">Github</a>] [
                    <a href="https://www.usenix.org/system/files/fast25_slides-qin.pdf">Slides</a>] [
                      <a href="https://www.youtube.com/watch?v=-Lpx9QuCEsw">Video</a>] [
                      <a href="https://github.com/kvcache-ai/Mooncake/tree/main/FAST25-release/traces">Traces</a>]
              </div>
            </li>
          </ul>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Experience
          </p>
          <ul>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Moonshot AI Infra Team</b>, Sep. 2023 – Present
                <br /> Research Intern
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>THUMT</b>, Sep. 2022 – Jun. 2023
                <br /> Research Assistant
              </div>
            </li>
          </ul>
          <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></div>
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <Tilt
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <img
              src={require("../../Assets/Profile__.jpg")}
              width="75%"
              className="img-fluid"
            />
          </Tilt>
          <i style={{ fontSize: "0.75em", color: "lightgray" }}>Caltech, CA, USA</i>
          <Row style={{ marginBottom: "0.5em", marginTop: "0.5em" }}></Row>
          <p
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            [
            <a
              href={require("../../Assets/Resume/Curriculum_Vitae_en.pdf")}
              target="_blank"
            >
              Curriculum Vitae
            </a>
            ] [<a href={"https://github.com/chestnut-Q"}>Github</a>] [
            <a href="https://scholar.google.com/citations?user=mwBB0U4AAAAJ&hl=en">
              Google Scholar
            </a>
            ]
          </p>
          <p
            style={{
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            qinry24@mails.tsinghua.edu.cn
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
