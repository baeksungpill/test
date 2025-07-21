// 스크롤타이거를 GSAP 하고 연동(등록)
gsap.registerPlugin(ScrollTrigger)

$(function(){
    // 애니메이션할 요소 선택
    // scroll bar의 위치와 요소의 위치를 정해줌
    gsap.timeline({
        // 스크롤바에 따른 애니메이션 설정
        scrollTrigger:{
            // 애니메이션 부드럽게 처리 할때 (1~4인대 보통 2~3줌)
            scrub:3,
            // 애니메이션 대상 선택
            trigger:".section2 ul",
            // 애니메이션 시작부분(요소의 위치, 스크롤바 위치)
            start:"20% 50%",
            // 애니메이션 끝부분
            end:"100% 90%",
            // markers:true,
        },
    })
    // .to("선택자",{현재위치에서 어디로},지연시간)
    .to(".section2 li:nth-child(1)",{y:-300,duration:1,ease:"ease-in-out"},0.5)
    .to(".section2 li:nth-child(2)",{y:-300,duration:1,ease:"ease-in-out"},0.7)
    .to(".section2 li:nth-child(3)",{y:-300,duration:1,ease:"ease-in-out"},0.9)
    .to(".section2 li:nth-child(4)",{y:-300,duration:1,ease:"ease-in-out"},1.1)

    gsap.timeline({
        scrollTrigger:{
            scrub:2,
            trigger:".section4",
            start:"10% 20%",
            end:"50% 50%",
            // markers:true,
        },
    })
    // 애니메이션 위치
    // .fromTo("선택자",{시작위치},{끝날위치},지연시간)
    .fromTo(".section4 ul li:nth-child(1)",{y:600},{y:0},1)
    .fromTo(".section4 ul li:nth-child(2)",{y:600},{y:0},1.5)
    .fromTo(".section4 ul li:nth-child(3)",{y:600},{y:0},2)
    .fromTo(".section4 ul li:nth-child(4)",{y:600},{y:0},2.5)
    .fromTo(".section4 ul li:nth-child(5)",{y:600},{y:0},3)
    .fromTo(".section4 ul li:nth-child(6)",{y:600},{y:0},3.5)
    .fromTo(".section4 ul li:nth-child(7)",{y:600},{y:0},4)

    gsap.timeline({
        scrollTrigger:{
            scrub:2,
            trigger:".section3",
            start:"0% 50%",
            end:"50% 90%",
            // markers:true,
        },
    })
    .fromTo(".section3 h2",{x:-1200},{x:0},2)
})