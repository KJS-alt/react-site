import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Chapter7 from '../compo_example/chapter7/Chapter7';
import Chapter8 from '../compo_example/chapter8/Chapter8';
import Chapter9 from '../compo_example/chapter9/Chapter9';
import Chapter10 from '../compo_example/chapter10/Chapter10';
import Chapter11 from '../compo_example/chapter11/Chapter11';
import Chapter12 from '../compo_example/chapter12/Chapter12';
import "./css/ExampleIndex.css"

const ExampleList = () => {
    return (
        <div className='container'>
            <h2>React 예제 목록</h2>

            <div className='chapter-grid'>
                <div className='chapter-card'>
                    <h3>Chapter 7</h3>
                    <p>Hook 사용법 (useState, useEffect, useRef 등)</p>
                    <Link to="chapter7" className='chapter-link'>
                        Chapter 7 보기
                    </Link>
                </div>

                <div className='chapter-card'>
                    <h3>Chapter 8</h3>
                    <p>이벤트 처리 (ConfirmButton)</p>
                    <Link to="chapter8" className='chapter-link'>
                        Chapter 8 보기
                    </Link>
                </div>

                <div className='chapter-card'>
                    <h3>Chapter 9</h3>
                    <p>조건부 렌더링 (LandingPage)</p>
                    <Link to="chapter9" className='chapter-link'>
                        Chapter 9 보기
                    </Link>
                </div>

                <div className='chapter-card'>
                    <h3>Chapter 10</h3>
                    <p>리스트와 키 (AttendanceBook)</p>
                    <Link to="chapter10" className='chapter-link'>
                        Chapter 10 보기
                    </Link>
                </div>

                <div className='chapter-card'>
                    <h3>Chapter 11</h3>
                    <p>폼 처리 (NameForm, RequestForm, FruitSelect 등)</p>
                    <Link to="chapter11" className='chapter-link'>
                        Chapter 11 보기
                    </Link>
                </div>

                <div className='chapter-card'>
                    <h3>Chapter 12</h3>
                    <p>상태 끌어올리기 (Calculator)</p>
                    <Link to="chapter12" className='chapter-link'>
                        Chapter 12 보기
                    </Link>
                </div>
            </div>
        </div>
    );
};

// 메인 ExampleIndex 컴포넌트 - 중첩 라우팅을 처리
const ExampleIndex = () => {
    return (
        <Routes>
            {/* 기본 경로에서는 예제 목록을 보여줌 */}
            <Route index element={<ExampleList />} />
            {/* 각 챕터별 라우팅 */}
            <Route path="chapter7" element={<Chapter7 />} />
            <Route path="chapter8" element={<Chapter8 />} />
            <Route path="chapter9" element={<Chapter9 />} />
            <Route path="chapter10" element={<Chapter10 />} />
            <Route path="chapter11" element={<Chapter11 />} />
            <Route path="chapter12" element={<Chapter12 />} />
        </Routes>
    );
};

export default ExampleIndex;