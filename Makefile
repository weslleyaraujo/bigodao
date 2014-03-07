instal:
	bundle

dev:
	rm nohup.out
	nohup compass watch&
	rerun app.rb
