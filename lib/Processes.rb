require 'cgi'
require 'cgi/session'

class Processes
    attr_reader :session, :cgi

    def initialize
        @cgi = CGI.new("html4")
        @session = CGI::Session.new(@cgi)
        @session['process_numbers'] = []
    end

    def setProcess(processNumber)
        @session['process_numbers'] << processNumber
        @session.close
    end

    def getProcess
        return @session['process_numbers']
    end

    def clear
        @session.delete
    end
end
