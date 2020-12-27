package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func gormConnect() *gorm.DB {
	DBMS := "mysql"
	USER := "root"
	PASS := "password"
	PROTOCOL := "tcp(localhost:3306)"
	DBNAME := "tododb"
	CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME

  db, err := gorm.Open(DBMS, CONNECT)	
  if err != nil {
		panic(err.Error())
	}
	return db
}

func main() {
	router := gin.Default()
	// go run 実行フォルダからの相対パス。
	router.LoadHTMLGlob("./asset/html/*.html")
	// 第一引数にはプロジェクトルートからの絶対パス。第二引数にはgo run 実行フォルダからの相対パス。
	router.Static("/backend/asset/css", "./asset/css")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.Run(":8080")
}
