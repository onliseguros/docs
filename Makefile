#!make
widdershins:
	widdershins --search false --language_tabs 'shell:Shell' 'javascript:Javascript' 'go:Go' --summary source/swagger/brokers.yaml -o source/swagger/_brokers_apis.md.erb
