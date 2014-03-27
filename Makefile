instal:
	bundle

dev:
	rm nohup.out
	touch nohup.out
	nohup compass watch&
	rerun app.rb
