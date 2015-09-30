Require './app'

run Sinatra::Application
run Proc.new { |env| ['200', {'Content-Type' => 'text/html'}, ['get rack\'d']] }