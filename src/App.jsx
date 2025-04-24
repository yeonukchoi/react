import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        color: '#000'
      }}>

        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 style={{ marginBottom: '20px '}}>최연욱</h1>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <img 
                src="/profile.jpg"
                alt="프로필"
                style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: '20px'
                }}
                />

                <div>
                    <p><strong>나이:</strong> 19세</p>
                    <p><strong>학교:</strong> 삼일공업고등학교</p>
                    <p><strong>이메일:</strong> chio0821@naver.com</p>
                    <p>
                      <strong>Github:</strong>{' '} 
                      <a
                        href="https://github.com/yeonukchoi"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0077cc', textDecoration: 'none' }}
                      >
                        https://github.com/yeonukchoi
                      </a>
                    </p>
                    <p><strong>꿈:</strong> 풀스택 개발자</p>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default App
