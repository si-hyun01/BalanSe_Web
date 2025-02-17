import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Popularity from '../Tabs/popularity';
import Soccer_p from "../Tabs/Category/soccer_ploblem";

// 이미지 import한 부분입니다.
import Soccer_image from './img/SoccerImage.jpg'
import Food_Image from "./img/FoodImage.jpg"
import Love_Image from "./img/LoveImage.png"
import Song_Image from "./img/SongImage.png"
import Actor_Image from "./img/actor.png"
import Survival_Image from "./img/Survival.jpg"
import Daily_Image from './img/DailyImage.jpg'

// Layout 모듈에서 default로 내보내도록 수정
const Layout = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeTab, setActiveTab] = useState('전체');
    const [isCategoryOpen, setCategoryOpen] = useState(false); // 카테고리 드롭다운 상태

    useEffect(() => {
        const closeDropdown = (e) => {
            // 드롭다운이 열려있고, 클릭된 곳이 드롭다운 외부면 닫히게 하는 부분임
            if (isCategoryOpen && !e.target.closest(".position-relative")) {
                setCategoryOpen(false);
            }
        };

        document.addEventListener("click", closeDropdown);

        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, [isCategoryOpen]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedCategory(null); // 탭 변경되면 선택되어있던 카테고리 초기화
    };

    const handleCategoryToggle = () => {
        setCategoryOpen(!isCategoryOpen);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setActiveTab('카테고리'); // 카테고리를 선택하면 현재 탭을 카테고리로 박음
        setCategoryOpen(false); // 카테고리를 선택하면 드롭다운을 닫습니다.
    };

    return (
        <>
            <Header />
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item" style={{ width: '200px' }}>
                        <button className={`nav-link ${activeTab === '전체' && 'active'}`} style={{ width: '100%', backgroundColor: activeTab === '전체' ? 'blue' : 'initial' }} onClick={() => handleTabChange('전체')}>전체</button>
                    </li>
                    <li className="nav-item" style={{ width: 200 }}> {/*이거는 카테고리 탭 디자인 하는 곳 */}
                        <div className="position-relative">
                            <button className={`nav-link ${activeTab === '카테고리' && 'active'}`} style={{ width: '100%' }} onClick={handleCategoryToggle}>카테고리</button>
                            {isCategoryOpen && (
                                <div className="position-absolute p-2 rounded " style={{ top: '100%', left: 0, minWidth: '600px', background: 'pink' }}>
                                    <ul className="list-unstyled m-0 d-flex flex-wrap">
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('축구')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Soccer_image} alt="축구" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>축구</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('음식')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Food_Image} alt="음식" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>음식</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('연애')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Love_Image} alt="연애" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>연애</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('노래')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Song_Image} alt="노래" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>노래</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('생존')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Survival_Image} alt="생존" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>생존</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('드라마&영화')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Actor_Image} alt="드라마&영화" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>드라마&영화</span>
                                            </button>
                                        </li>
                                        <li className="col-4 mb-3 d-flex flex-column align-items-center">
                                            <button onClick={() => handleCategorySelect('일상')} style={{ background: 'black', padding: 0, border: 'none' }}>
                                                <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                                                    <img src={Daily_Image} alt="일상" style={{ width: '100%', height: '150px' }} />
                                                </div>
                                                <span style={{ color: 'white' }}>일상</span>
                                            </button>
                                        </li>
                                        {/* 나머지 카테고리 이미지 및 스타일 추가 */}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="nav-item" style={{ width: '200px' }}>
                        <button className={`nav-link ${activeTab === '인기' && 'active'}`} style={{ width: '100%', backgroundColor: activeTab === '인기' ? 'blue' : 'initial' }} onClick={() => handleTabChange('인기')}>인기</button>
                    </li>
                    <li className="nav-item" style={{ width: '200px' }}>
                        <button className={`nav-link ${activeTab === '문제 만들기' && 'active'}`} style={{ width: '100%', backgroundColor: activeTab === '문제 만들기' ? 'blue' : 'initial' }} onClick={() => handleTabChange('문제 만들기')}>문제 만들기</button>
                    </li>
                    <li className="nav-item" style={{ width: '200px' }}>
                        <button className={`nav-link ${activeTab === '공지' && 'active'}`} style={{ width: '100%', backgroundColor: activeTab === '공지' ? 'blue' : 'initial' }} onClick={() => handleTabChange('공지')}>공지</button>
                    </li>
                </ul>
            </div>
            <div>
                {activeTab === '전체' && (
                    <>대충 메인 페이지는 바로 VS 시작하는 형태로 가는 거 고려하기</>
                )}
                {selectedCategory && (
                    <div>
                        {selectedCategory === '축구'}
                        <Soccer_p />
                    </div>
                )}
                {activeTab === '인기' && (
                    <Popularity />
                )}
                {activeTab === '문제 만들기' && (
                    <>문제 만들기 탭 내용</>
                )}
                {activeTab === '공지' && (
                    <>공지 탭 내용</>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Layout; // Layout 모듈을 default로 내보냅니다.
