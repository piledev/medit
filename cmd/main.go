package main

import (
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
	engine := gin.Default()
	engine.LoadHTMLGlob("asset/html/*.html")
	engine.Static("/asset/css", "asset/css")

	engine.GET("/", func(c *gin.Context) {

	})
}
