from xml.etree import ElementTree
import csv

tree = ElementTree.parse("./sample.xml")

csvf = open("csv_sheet.csv",'w',encoding='utf-8')
csvf_writer = csv.writer(csvf)

csvf_writer.writerow(["Name","Price","Description","Calories","Rating"])

for student in tree.findall("food"):
    if(student): 
      Name = student.find("name")
      Price = student.find("price")
      Description = student.find("description")
      Calories = student.find("calories")
      Rating = student.find("rating")
      csv_line = [Name.text, Price.text, Description.text, Calories.text, Rating.text]

      csvf_writer.writerow(csv_line)