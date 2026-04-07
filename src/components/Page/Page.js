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
            Hi! I'm Ruoyu Qin (秦若愚). I am a second-year Ph.D. student in Department of Computer Science and Technology at Tsinghua University, working in the{" "}
            <a href="https://madsys.cs.tsinghua.edu.cn" target="_blank">
              MADSys Lab
            </a>{" "}
            under the supervision of Prof. <a href={"https://madsys.cs.tsinghua.edu.cn/author/mingxing-zhang"} target="_blank">Mingxing Zhang</a>. Prior to that, I received my Bachelor's degree in Computer Science and Technology, also from Tsinghua University.
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
                (Sept 2025) I gave an online tutorial titled "Code Walkthrough: Mooncake Backend Integration in LMCache" at SIGCOMM 2025, as part of the tutorial <em>Networking for Stateful LLM Inference</em>. [<a href="https://conferences.sigcomm.org/sigcomm/2025/tutorials-hackathons/tutorial-nllm" target="_blank">Website</a>] [<a href="https://www.youtube.com/watch?v=nem6UXZIILg" target="_blank">Vedio</a>] [<a href={require("../../Assets/Files/sildes-sigcomm-workshop-202509.pdf")} target="_blank">Slides</a>]
              </li>
              <li>
                (Aug 2025) I gave an oral presentation on the Mooncake paper at CCF ChinaStorage 2025, held in Wuhan, Hubei, China. [<a href="https://ccf.org.cn/chinastorage2025" target="_blank">Website</a>] [<a href={require("../../Assets/Files/slides-ccfstorage-202508.pdf")} target="_blank">Slides</a>]
              </li>
              <li>
                (May 2025) I gave an oral presentation on the Mooncake paper at the 28<sup>th</sup> ChinaSys Workshop, held in Chongqing, China. [<a href={require("../../Assets/Files/sildes-chinasys-202505.pdf")} target="_blank">Slides</a>]
              </li>
              <li>
                (February 2025) I gave an oral presentation at FAST 2025 in Santa Clara, CA, USA. [<a href="https://www.usenix.org/conference/fast25" target="_blank">Website</a>] [<a href="https://www.usenix.org/system/files/fast25_slides-qin.pdf" target="_blank">Slides</a>]
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
                <b>Ruoyu Qin*</b>
                , Zheming Li*, Weiran He, Jialei Cui, Feng Ren, Mingxing Zhang, Yongwei Wu, Weimin Zheng, Xinran Xu.
                <br />
                <b>Erik Riedel Best Paper Award!</b>
                <br />
                <i>
                USENIX Conference on File and Storage Technologies (FAST), Santa Clara, CA, USA, 2025.
                </i>
                <br /> [
                <a href="https://www.usenix.org/system/files/fast25-qin.pdf" target="_blank">Paper</a>] [
                  <a href="https://github.com/kvcache-ai/Mooncake" target="_blank">Github</a>] [
                    <a href="https://www.usenix.org/system/files/fast25_slides-qin.pdf" target="_blank">Slides</a>] [
                      <a href="https://www.youtube.com/watch?v=-Lpx9QuCEsw" target="_blank">Video</a>] [
                      <a href="https://github.com/kvcache-ai/Mooncake/tree/main/FAST25-release/traces" target="_blank">Traces</a>]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Mooncake: A KVCache-centric Disaggregated Architecture for LLM Serving</b>
                {" "}
                <br />
                <b>Ruoyu Qin*</b>
                , Zheming Li*, Weiran He, Jialei Cui, Heyi Tang, Feng Ren, Teng Ma, Shangming Cai, Yineng Zhang, Mingxing Zhang, Yongwei Wu, Weimin Zheng, Xinran Xu.
                <br />
                <i>
                ACM Transactions on Storage, 2025.
                </i>
                <br /> [
                <a href="https://dl.acm.org/doi/pdf/10.1145/3773772" target="_blank">Paper</a>] [
                  <a href="https://github.com/kvcache-ai/Mooncake" target="_blank">Code</a>]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>Seer: Online Context Learning for Fast Synchronous LLM Reinforcement Learning</b>
                {" "}
                <br />
                <b>Ruoyu Qin</b>
                , Weiran He, Weixiao Huang, Yangkun Zhang, Yikai Zhao, Bo Pang, Xinran Xu, Yingdi Shan, Yongwei Wu, Mingxing Zhang.
                <br />
                <i>
                Accepted to appear in the 20th USENIX Symposium on Operating Systems Design and Implementation (OSDI '26).
                </i>
                <br /> [
                <a href="https://arxiv.org/pdf/2511.14617" target="_blank">Paper</a>]
              </div>
            </li>
            <li>
              <div style={{ marginBottom: "0.5em", marginTop: "0.5em" }}>
                <b>TENT: A Declarative Slice Spraying Engine for Performant and Resilient Data Movement in Disaggregated LLM Serving</b>
                {" "}
                <br />
                Feng Ren, <b>Ruoyu Qin</b>, Teng Ma, Shangming Cai, Zheng Liu, Chao Lei, Dejiang Zhu, Ke Yang, Jinyang Su, Weixiao Huang, Yikai Zhao, Yongwei Wu, Weimin Zheng, Mingxing Zhang.
                <br />
                <i>
                Frontier AI Systems Workshop (FAISys), Hong Kong, China, 2025.
                </i>
                <br /> [
                <a href="https://www.dropbox.com/scl/fo/oylca94tenkqrp3jb0syw/AGMkRE0OpPyCOsJGK6o-MsM?e=2&preview=faisys25-final11.pdf&rlkey=0wage9ssu9mxelrmly2k2uefl&dl=0" target="_blank">Paper</a>] [
                  <a href="https://github.com/kvcache-ai/Mooncake" target="_blank">Code</a>]
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
            [<a href={require("../../Assets/Resume/cv-qinruoyu.pdf")} target="_blank">Curriculum Vitae</a>] [
             <a href={"https://github.com/chestnut-Q"} target="_blank">Github</a>] [
             <a href="https://scholar.google.com/citations?user=mwBB0U4AAAAJ&hl=en" target="_blank">Google Scholar</a>] [
             <a href="https://www.zhihu.com/people/tang-chao-li-zi-71-61" target="_blank">Zhihu</a>]
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
      
      {/* ICP备案号 */}
      <Row style={{ width: "100%", marginTop: "2em", textAlign: "center" }}>
        <Col>
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#888888",
              textDecoration: "none",
              fontSize: "0.85em",
              transition: "color 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.color = "#666666"}
            onMouseOut={(e) => e.target.style.color = "#888888"}
          >
            京ICP备2024091566号-1
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
