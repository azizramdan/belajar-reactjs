import React from 'react'
import TitleArticle from './TitleArticle'
import ContentArticle from './ContentArticle'

const Article = ({ userLogin }) => {
  return <div style={{ margin: '5px' }}>
    <TitleArticle text="Ini adalah judul" />
    <ContentArticle dataLogin={ userLogin }>
      <p>Ini adalah paragraf pertama Ini adalah paragraf pertama Ini adalah paragraf pertama Ini adalah paragraf pertama Ini adalah paragraf pertama </p>
      <p>Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua Ini adalah paragraf kedua </p>
    </ContentArticle>
  </div>
}

export default Article