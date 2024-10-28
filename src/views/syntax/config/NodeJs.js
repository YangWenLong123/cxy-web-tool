/*
 * @Author: along
 * @Description:
 * @Date: 2024-10-24 14:25:29
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 15:19:07
 * @FilePath: /cxy-web-tool/src/views/syntax/config/NodeJs.js
 */
export const NodeJs = [
  {
    title: "Resource",
    children: [
      {
        title: "Online",
        children: [
          {
            title: "Official Website",
            url: "https://nodejs.org/zh-cn",
          },
        ],
      },
    ],
  },

  {
    title: "Basic",
    children: [
      {
        title: "Global Objects",
        children: [
          {
            title: "global",
            url: "http://nodejs.org/api/globals.html#globals_global",
          },
          {
            title: "process",
            url: "http://nodejs.org/api/globals.html#globals_process",
          },
          {
            title: "console",
            url: "http://nodejs.org/api/globals.html#globals_console",
          },
          {
            title: "Class: Buffer",
            url: "http://nodejs.org/api/globals.html#globals_class_buffer",
          },
          {
            title: "require()",
            url: "http://nodejs.org/api/globals.html#globals_require",
          },
          {
            title: "require.resolve()",
            url: "http://nodejs.org/api/globals.html#globals_require_resolve",
          },
          {
            title: "require.cache",
            url: "http://nodejs.org/api/globals.html#globals_require_cache",
          },
          {
            title: "require.extensions",
            url: "http://nodejs.org/api/globals.html#globals_require_extensions",
          },
          {
            title: "__filename",
            url: "http://nodejs.org/api/globals.html#globals_filename",
          },
          {
            title: "__dirname",
            url: "http://nodejs.org/api/globals.html#globals_dirname",
          },
          {
            title: "module",
            url: "http://nodejs.org/api/globals.html#globals_module",
          },
          {
            title: "exports",
            url: "http://nodejs.org/api/globals.html#globals_exports",
          },
          {
            title: "setTimeout(cb, ms)",
            url: "http://nodejs.org/api/globals.html#globals_settimeout_cb_ms",
          },
          {
            title: "clearTimeout(t)",
            url: "http://nodejs.org/api/globals.html#globals_cleartimeout_t",
          },
        ],
      },
      {
        title: "console",
        children: [
          {
            title: "console.log([data], [...])",
            url: "http://nodejs.org/api/stdio.html#stdio_console_log_data",
          },
          {
            title: "console.info([data], [...])",
            url: "http://nodejs.org/api/stdio.html#stdio_console_info_data",
          },
          {
            title: "console.error([data], [...])",
            url: "http://nodejs.org/api/stdio.html#stdio_console_error_data",
          },
          {
            title: "console.warn([data], [...])",
            url: "http://nodejs.org/api/stdio.html#stdio_console_warn_data",
          },
          {
            title: "console.dir(obj)",
            url: "http://nodejs.org/api/stdio.html#stdio_console_dir_obj",
          },
          {
            title: "console.time(label)",
            url: "http://nodejs.org/api/stdio.html#stdio_console_time_label",
          },
          {
            title: "console.timeEnd(label)",
            url: "http://nodejs.org/api/stdio.html#stdio_console_timeend_label",
          },
          {
            title: "console.trace(label)",
            url: "http://nodejs.org/api/stdio.html#stdio_console_trace_label",
          },
          {
            title: "console.assert(expression, [message])",
            url: "http://nodejs.org/api/stdio.html#stdio_console_assert_expression_message",
          },
        ],
      },
      {
        title: "Timers",
        children: [
          {
            title: "setTimeout(callback, delay, [arg], [...])",
            url: "http://nodejs.org/api/timers.html#timers_settimeout_callback_delay_arg",
          },
          {
            title: "clearTimeout(timeoutId)",
            url: "http://nodejs.org/api/timers.html#timers_cleartimeout_timeoutid",
          },
          {
            title: "setInterval(callback, delay, [arg], [...])",
            url: "http://nodejs.org/api/timers.html#timers_setinterval_callback_delay_arg",
          },
          {
            title: "clearInterval(intervalId)",
            url: "http://nodejs.org/api/timers.html#timers_clearinterval_intervalid",
          },
        ],
      },
      {
        title: "Util",
        children: [
          {
            title: "util.format(format, [...])",
            url: "http://nodejs.org/api/util.html#util_util_format_format",
          },
          {
            title: "util.debug(string)",
            url: "http://nodejs.org/api/util.html#util_util_debug_string",
          },
          {
            title: "util.error([...])",
            url: "http://nodejs.org/api/util.html#util_util_error",
          },
          {
            title: "util.puts([...])",
            url: "http://nodejs.org/api/util.html#util_util_puts",
          },
          {
            title: "util.print([...])",
            url: "http://nodejs.org/api/util.html#util_util_print",
          },
          {
            title: "util.log(string)",
            url: "http://nodejs.org/api/util.html#util_util_log_string",
          },
          {
            title: "util.inspect(object, [showHidden], [depth], [colors])",
            url: "http://nodejs.org/api/util.html#util_util_inspect_object_showhidden_depth_colors",
          },
          {
            title: "util.isArray(object)",
            url: "http://nodejs.org/api/util.html#util_util_isarray_object",
          },
          {
            title: "util.isRegExp(object)",
            url: "http://nodejs.org/api/util.html#util_util_isregexp_object",
          },
          {
            title: "util.isDate(object)",
            url: "http://nodejs.org/api/util.html#util_util_isdate_object",
          },
          {
            title: "util.isError(object)",
            url: "http://nodejs.org/api/util.html#util_util_iserror_object",
          },
          {
            title: "util.pump(readableStream, writableStream, [callback])",
            url: "http://nodejs.org/api/util.html#util_util_pump_readablestream_writablestream_callback",
          },
          {
            title: "util.inherits(constructor, superConstructor)",
            url: "http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor",
          },
        ],
      },
    ],
  },

  {
    title: "Module",
    children: [
      {
        title: "Modules",
        children: [
          {
            title: "Cycles",
            url: "http://nodejs.org/api/modules.html#modules_cycles",
          },
          {
            title: "Core Modules",
            url: "http://nodejs.org/api/modules.html#modules_core_modules",
          },
          {
            title: "File Modules",
            url: "http://nodejs.org/api/modules.html#modules_file_modules",
          },
          {
            title: "Loading from <code>node_modules</code> Folders",
            url: "http://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders",
          },
          {
            title: "Folders as Modules",
            url: "http://nodejs.org/api/modules.html#modules_folders_as_modules",
          },
          {
            title: "Caching",
            url: "http://nodejs.org/api/modules.html#modules_caching",
          },
          {
            title: "Module Caching Caveats",
            url: "http://nodejs.org/api/modules.html#modules_module_caching_caveats",
          },
          {
            title: "The <code>module</code> Object",
            url: "http://nodejs.org/api/modules.html#modules_the_module_object",
          },
          {
            title: "module.exports",
            url: "http://nodejs.org/api/modules.html#modules_module_exports",
          },
          {
            title: "module.require(id)",
            url: "http://nodejs.org/api/modules.html#modules_module_require_id",
          },
          {
            title: "module.id",
            url: "http://nodejs.org/api/modules.html#modules_module_id",
          },
          {
            title: "module.filename",
            url: "http://nodejs.org/api/modules.html#modules_module_filename",
          },
          {
            title: "module.loaded",
            url: "http://nodejs.org/api/modules.html#modules_module_loaded",
          },
          {
            title: "module.parent",
            url: "http://nodejs.org/api/modules.html#modules_module_parent",
          },
          {
            title: "module.children",
            url: "http://nodejs.org/api/modules.html#modules_module_children",
          },
          {
            title: "All Together...",
            url: "http://nodejs.org/api/modules.html#modules_all_together",
          },
          {
            title: "Loading from the global folders",
            url: "http://nodejs.org/api/modules.html#modules_loading_from_the_global_folders",
          },
          {
            title: "Accessing the main module",
            url: "http://nodejs.org/api/modules.html#modules_accessing_the_main_module",
          },
          {
            title: "Addenda: Package Manager Tips",
            url: "http://nodejs.org/api/modules.html#modules_addenda_package_manager_tips",
          },
        ],
      },
      {
        title: "Addons",
        children: [
          {
            title: "Addons",
            url: "http://nodejs.org/api/addons.html#addons_addons",
          },
          {
            title: "Hello world",
            url: "http://nodejs.org/api/addons.html#addons_hello_world",
          },
          {
            title: "Addon patterns",
            url: "http://nodejs.org/api/addons.html#addons_addon_patterns",
          },
          {
            title: "Function arguments",
            url: "http://nodejs.org/api/addons.html#addons_function_arguments",
          },
          {
            title: "Callbacks",
            url: "http://nodejs.org/api/addons.html#addons_callbacks",
          },
          {
            title: "Object factory",
            url: "http://nodejs.org/api/addons.html#addons_object_factory",
          },
          {
            title: "Function factory",
            url: "http://nodejs.org/api/addons.html#addons_function_factory",
          },
          {
            title: "Wrapping C++ objects",
            url: "http://nodejs.org/api/addons.html#addons_wrapping_c_objects",
          },
          {
            title: "Factory of wrapped objects",
            url: "http://nodejs.org/api/addons.html#addons_factory_of_wrapped_objects",
          },
          {
            title: "Passing wrapped objects around",
            url: "http://nodejs.org/api/addons.html#addons_passing_wrapped_objects_around",
          },
        ],
      },
    ],
  },

  {
    title: "Buffer/Stream",
    children: [
      {
        title: "Buffer",
        children: [
          {
            title: "Buffer",
            url: "http://nodejs.org/api/buffer.html#buffer_buffer",
          },
          {
            title: "Class: Buffer",
            url: "http://nodejs.org/api/buffer.html#buffer_class_buffer",
          },
          {
            title: "new Buffer(size)",
            url: "http://nodejs.org/api/buffer.html#buffer_new_buffer_size",
          },
          {
            title: "new Buffer(array)",
            url: "http://nodejs.org/api/buffer.html#buffer_new_buffer_array",
          },
          {
            title: "new Buffer(str, [encoding])",
            url: "http://nodejs.org/api/buffer.html#buffer_new_buffer_str_encoding",
          },
          {
            title: "buf.write(string, [offset], [length], [encoding])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_write_string_offset_length_encoding",
          },
          {
            title: "buf.toString([encoding], [start], [end])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end",
          },
          {
            title: "buf[index]",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_index",
          },
          {
            title: "Class Method: Buffer.isBuffer(obj)",
            url: "http://nodejs.org/api/buffer.html#buffer_class_method_buffer_isbuffer_obj",
          },
          {
            title: "Class Method: Buffer.byteLength(string, [encoding])",
            url: "http://nodejs.org/api/buffer.html#buffer_class_method_buffer_bytelength_string_encoding",
          },
          {
            title: "Class Method: Buffer.concat(list, [totalLength])",
            url: "http://nodejs.org/api/buffer.html#buffer_class_method_buffer_concat_list_totallength",
          },
          {
            title: "buf.length",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_length",
          },
          {
            title:
              "buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_copy_targetbuffer_targetstart_sourcestart_sourceend",
          },
          {
            title: "buf.slice([start], [end])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_slice_start_end",
          },
          {
            title: "buf.readUInt8(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readuint8_offset_noassert",
          },
          {
            title: "buf.readUInt16LE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readuint16le_offset_noassert",
          },
          {
            title: "buf.readUInt16BE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readuint16be_offset_noassert",
          },
          {
            title: "buf.readUInt32LE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readuint32le_offset_noassert",
          },
          {
            title: "buf.readUInt32BE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readuint32be_offset_noassert",
          },
          {
            title: "buf.readInt8(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readint8_offset_noassert",
          },
          {
            title: "buf.readInt16LE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readint16le_offset_noassert",
          },
          {
            title: "buf.readInt16BE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readint16be_offset_noassert",
          },
          {
            title: "buf.readInt32LE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readint32le_offset_noassert",
          },
          {
            title: "buf.readInt32BE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readint32be_offset_noassert",
          },
          {
            title: "buf.readFloatLE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readfloatle_offset_noassert",
          },
          {
            title: "buf.readFloatBE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readfloatbe_offset_noassert",
          },
          {
            title: "buf.readDoubleLE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readdoublele_offset_noassert",
          },
          {
            title: "buf.readDoubleBE(offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_readdoublebe_offset_noassert",
          },
          {
            title: "buf.writeUInt8(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeuint8_value_offset_noassert",
          },
          {
            title: "buf.writeUInt16LE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeuint16le_value_offset_noassert",
          },
          {
            title: "buf.writeUInt16BE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeuint16be_value_offset_noassert",
          },
          {
            title: "buf.writeUInt32LE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeuint32le_value_offset_noassert",
          },
          {
            title: "buf.writeUInt32BE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeuint32be_value_offset_noassert",
          },
          {
            title: "buf.writeInt8(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeint8_value_offset_noassert",
          },
          {
            title: "buf.writeInt16LE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeint16le_value_offset_noassert",
          },
          {
            title: "buf.writeInt16BE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeint16be_value_offset_noassert",
          },
          {
            title: "buf.writeInt32LE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeint32le_value_offset_noassert",
          },
          {
            title: "buf.writeInt32BE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writeint32be_value_offset_noassert",
          },
          {
            title: "buf.writeFloatLE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writefloatle_value_offset_noassert",
          },
          {
            title: "buf.writeFloatBE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writefloatbe_value_offset_noassert",
          },
          {
            title: "buf.writeDoubleLE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writedoublele_value_offset_noassert",
          },
          {
            title: "buf.writeDoubleBE(value, offset, [noAssert])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_writedoublebe_value_offset_noassert",
          },
          {
            title: "buf.fill(value, [offset], [end])",
            url: "http://nodejs.org/api/buffer.html#buffer_buf_fill_value_offset_end",
          },
          {
            title: "buffer.INSPECT_MAX_BYTES",
            url: "http://nodejs.org/api/buffer.html#buffer_buffer_inspect_max_bytes",
          },
          {
            title: "Class: SlowBuffer",
            url: "http://nodejs.org/api/buffer.html#buffer_class_slowbuffer",
          },
        ],
      },
      {
        title: "Stream",
        children: [
          {
            title: "Readable Stream",
            url: "http://nodejs.org/api/stream.html#stream_readable_stream",
          },
          {
            title: "Event: 'data'",
            url: "http://nodejs.org/api/stream.html#stream_event_data",
          },
          {
            title: "Event: 'end'",
            url: "http://nodejs.org/api/stream.html#stream_event_end",
          },
          {
            title: "Event: 'error'",
            url: "http://nodejs.org/api/stream.html#stream_event_error",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/stream.html#stream_event_close",
          },
          {
            title: "stream.readable",
            url: "http://nodejs.org/api/stream.html#stream_stream_readable",
          },
          {
            title: "stream.setEncoding([encoding])",
            url: "http://nodejs.org/api/stream.html#stream_stream_setencoding_encoding",
          },
          {
            title: "stream.pause()",
            url: "http://nodejs.org/api/stream.html#stream_stream_pause",
          },
          {
            title: "stream.resume()",
            url: "http://nodejs.org/api/stream.html#stream_stream_resume",
          },
          {
            title: "stream.destroy()",
            url: "http://nodejs.org/api/stream.html#stream_stream_destroy",
          },
          {
            title: "stream.pipe(destination, [options])",
            url: "http://nodejs.org/api/stream.html#stream_stream_pipe_destination_options",
          },
          {
            title: "Writable Stream",
            url: "http://nodejs.org/api/stream.html#stream_writable_stream",
          },
          {
            title: "Event: 'drain'",
            url: "http://nodejs.org/api/stream.html#stream_event_drain",
          },
          {
            title: "Event: 'error'",
            url: "http://nodejs.org/api/stream.html#stream_event_error_1",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/stream.html#stream_event_close_1",
          },
          {
            title: "Event: 'pipe'",
            url: "http://nodejs.org/api/stream.html#stream_event_pipe",
          },
          {
            title: "stream.writable",
            url: "http://nodejs.org/api/stream.html#stream_stream_writable",
          },
          {
            title: "stream.write(string, [encoding], [fd])",
            url: "http://nodejs.org/api/stream.html#stream_stream_write_string_encoding_fd",
          },
          {
            title: "stream.write(buffer)",
            url: "http://nodejs.org/api/stream.html#stream_stream_write_buffer",
          },
          {
            title: "stream.end()",
            url: "http://nodejs.org/api/stream.html#stream_stream_end",
          },
          {
            title: "stream.end(string, encoding)",
            url: "http://nodejs.org/api/stream.html#stream_stream_end_string_encoding",
          },
          {
            title: "stream.end(buffer)",
            url: "http://nodejs.org/api/stream.html#stream_stream_end_buffer",
          },
          {
            title: "stream.destroy()",
            url: "http://nodejs.org/api/stream.html#stream_stream_destroy_1",
          },
          {
            title: "stream.destroySoon()",
            url: "http://nodejs.org/api/stream.html#stream_stream_destroysoon",
          },
        ],
      },
      {
        title: "TTY",
        children: [
          {
            title: "tty.isatty(fd)",
            url: "http://nodejs.org/api/tty.html#tty_tty_isatty_fd",
          },
          {
            title: "tty.setRawMode(mode)",
            url: "http://nodejs.org/api/tty.html#tty_tty_setrawmode_mode",
          },
          {
            title: "Class: ReadStream",
            url: "http://nodejs.org/api/tty.html#tty_class_readstream",
          },
          {
            title: "rs.isRaw",
            url: "http://nodejs.org/api/tty.html#tty_rs_israw",
          },
          {
            title: "rs.setRawMode(mode)",
            url: "http://nodejs.org/api/tty.html#tty_rs_setrawmode_mode",
          },
          {
            title: "Class WriteStream",
            url: "http://nodejs.org/api/tty.html#tty_class_writestream",
          },
          {
            title: "ws.columns",
            url: "http://nodejs.org/api/tty.html#tty_ws_columns",
          },
          {
            title: "ws.rows",
            url: "http://nodejs.org/api/tty.html#tty_ws_rows",
          },
          {
            title: "Event: 'resize'",
            url: "http://nodejs.org/api/tty.html#tty_event_resize",
          },
        ],
      },
    ],
  },

  {
    title: "Process",
    children: [
      {
        title: "Process",
        children: [
          {
            title: "Event: 'exit'",
            url: "http://nodejs.org/api/process.html#process_event_exit",
          },
          {
            title: "Event: 'uncaughtException'",
            url: "http://nodejs.org/api/process.html#process_event_uncaughtexception",
          },
          {
            title: "Signal Events",
            url: "http://nodejs.org/api/process.html#process_signal_events",
          },
          {
            title: "process.stdout",
            url: "http://nodejs.org/api/process.html#process_process_stdout",
          },
          {
            title: "process.stderr",
            url: "http://nodejs.org/api/process.html#process_process_stderr",
          },
          {
            title: "process.stdin",
            url: "http://nodejs.org/api/process.html#process_process_stdin",
          },
          {
            title: "process.argv",
            url: "http://nodejs.org/api/process.html#process_process_argv",
          },
          {
            title: "process.execPath",
            url: "http://nodejs.org/api/process.html#process_process_execpath",
          },
          {
            title: "process.abort()",
            url: "http://nodejs.org/api/process.html#process_process_abort",
          },
          {
            title: "process.chdir(directory)",
            url: "http://nodejs.org/api/process.html#process_process_chdir_directory",
          },
          {
            title: "process.cwd()",
            url: "http://nodejs.org/api/process.html#process_process_cwd",
          },
          {
            title: "process.env",
            url: "http://nodejs.org/api/process.html#process_process_env",
          },
          {
            title: "process.exit([code])",
            url: "http://nodejs.org/api/process.html#process_process_exit_code",
          },
          {
            title: "process.getgid()",
            url: "http://nodejs.org/api/process.html#process_process_getgid",
          },
          {
            title: "process.setgid(id)",
            url: "http://nodejs.org/api/process.html#process_process_setgid_id",
          },
          {
            title: "process.getuid()",
            url: "http://nodejs.org/api/process.html#process_process_getuid",
          },
          {
            title: "process.setuid(id)",
            url: "http://nodejs.org/api/process.html#process_process_setuid_id",
          },
          {
            title: "process.version",
            url: "http://nodejs.org/api/process.html#process_process_version",
          },
          {
            title: "process.versions",
            url: "http://nodejs.org/api/process.html#process_process_versions",
          },
          {
            title: "process.config",
            url: "http://nodejs.org/api/process.html#process_process_config",
          },
          {
            title: "process.kill(pid, [signal])",
            url: "http://nodejs.org/api/process.html#process_process_kill_pid_signal",
          },
          {
            title: "process.pid",
            url: "http://nodejs.org/api/process.html#process_process_pid",
          },
          {
            title: "process.title",
            url: "http://nodejs.org/api/process.html#process_process_title",
          },
          {
            title: "process.arch",
            url: "http://nodejs.org/api/process.html#process_process_arch",
          },
          {
            title: "process.platform",
            url: "http://nodejs.org/api/process.html#process_process_platform",
          },
          {
            title: "process.memoryUsage()",
            url: "http://nodejs.org/api/process.html#process_process_memoryusage",
          },
          {
            title: "process.nextTick(callback)",
            url: "http://nodejs.org/api/process.html#process_process_nexttick_callback",
          },
          {
            title: "process.umask([mask])",
            url: "http://nodejs.org/api/process.html#process_process_umask_mask",
          },
          {
            title: "process.uptime()",
            url: "http://nodejs.org/api/process.html#process_process_uptime",
          },
          {
            title: "process.hrtime()",
            url: "http://nodejs.org/api/process.html#process_process_hrtime",
          },
        ],
      },
      {
        title: "Events",
        children: [
          {
            title: "Class: events.EventEmitter",
            url: "http://nodejs.org/api/events.html#events_class_events_eventemitter",
          },
          {
            title: "emitter.addListener(event, listener)",
            url: "http://nodejs.org/api/events.html#events_emitter_addlistener_event_listener",
          },
          {
            title: "emitter.on(event, listener)",
            url: "http://nodejs.org/api/events.html#events_emitter_on_event_listener",
          },
          {
            title: "emitter.once(event, listener)",
            url: "http://nodejs.org/api/events.html#events_emitter_once_event_listener",
          },
          {
            title: "emitter.removeListener(event, listener)",
            url: "http://nodejs.org/api/events.html#events_emitter_removelistener_event_listener",
          },
          {
            title: "emitter.removeAllListeners([event])",
            url: "http://nodejs.org/api/events.html#events_emitter_removealllisteners_event",
          },
          {
            title: "emitter.setMaxListeners(n)",
            url: "http://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n",
          },
          {
            title: "emitter.listeners(event)",
            url: "http://nodejs.org/api/events.html#events_emitter_listeners_event",
          },
          {
            title: "emitter.emit(event, [arg1], [arg2], [...])",
            url: "http://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2",
          },
          {
            title: "Event: 'newListener'",
            url: "http://nodejs.org/api/events.html#events_event_newlistener",
          },
        ],
      },
    ],
  },

  {
    title: "Domain",
    children: [
      {
        title: "Domain",
        children: [
          {
            title: "Additions to Error objects",
            url: "http://nodejs.org/api/domain.html#domain_additions_to_error_objects",
          },
          {
            title: "Implicit Binding",
            url: "http://nodejs.org/api/domain.html#domain_implicit_binding",
          },
          {
            title: "Explicit Binding",
            url: "http://nodejs.org/api/domain.html#domain_explicit_binding",
          },
          {
            title: "domain.create()",
            url: "http://nodejs.org/api/domain.html#domain_domain_create",
          },
          {
            title: "Class: Domain",
            url: "http://nodejs.org/api/domain.html#domain_class_domain",
          },
          {
            title: "domain.run(fn)",
            url: "http://nodejs.org/api/domain.html#domain_domain_run_fn",
          },
          {
            title: "domain.members",
            url: "http://nodejs.org/api/domain.html#domain_domain_members",
          },
          {
            title: "domain.add(emitter)",
            url: "http://nodejs.org/api/domain.html#domain_domain_add_emitter",
          },
          {
            title: "domain.remove(emitter)",
            url: "http://nodejs.org/api/domain.html#domain_domain_remove_emitter",
          },
          {
            title: "domain.bind(cb)",
            url: "http://nodejs.org/api/domain.html#domain_domain_bind_cb",
          },
          {
            title: "Example",
            url: "http://nodejs.org/api/domain.html#domain_example",
          },
          {
            title: "domain.intercept(cb)",
            url: "http://nodejs.org/api/domain.html#domain_domain_intercept_cb",
          },
          {
            title: "Example",
            url: "http://nodejs.org/api/domain.html#domain_example_1",
          },
          {
            title: "domain.dispose()",
            url: "http://nodejs.org/api/domain.html#domain_domain_dispose",
          },
        ],
      },
      {
        title: "Crypto",
        children: [
          {
            title: "crypto.createCredentials(details)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createcredentials_details",
          },
          {
            title: "crypto.createHash(algorithm)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm",
          },
          {
            title: "Class: Hash",
            url: "http://nodejs.org/api/crypto.html#crypto_class_hash",
          },
          {
            title: "hash.update(data, [input_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_hash_update_data_input_encoding",
          },
          {
            title: "hash.digest([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_hash_digest_encoding",
          },
          {
            title: "crypto.createHmac(algorithm, key)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createhmac_algorithm_key",
          },
          {
            title: "Class: Hmac",
            url: "http://nodejs.org/api/crypto.html#crypto_class_hmac",
          },
          {
            title: "hmac.update(data)",
            url: "http://nodejs.org/api/crypto.html#crypto_hmac_update_data",
          },
          {
            title: "hmac.digest([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_hmac_digest_encoding",
          },
          {
            title: "crypto.createCipher(algorithm, password)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createcipher_algorithm_password",
          },
          {
            title: "crypto.createCipheriv(algorithm, key, iv)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createcipheriv_algorithm_key_iv",
          },
          {
            title: "Class: Cipher",
            url: "http://nodejs.org/api/crypto.html#crypto_class_cipher",
          },
          {
            title: "cipher.update(data, [input_encoding], [output_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_cipher_update_data_input_encoding_output_encoding",
          },
          {
            title: "cipher.final([output_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_cipher_final_output_encoding",
          },
          {
            title: "cipher.setAutoPadding(auto_padding=true)",
            url: "http://nodejs.org/api/crypto.html#crypto_cipher_setautopadding_auto_padding_true",
          },
          {
            title: "crypto.createDecipher(algorithm, password)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createdecipher_algorithm_password",
          },
          {
            title: "crypto.createDecipheriv(algorithm, key, iv)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createdecipheriv_algorithm_key_iv",
          },
          {
            title: "Class: Decipher",
            url: "http://nodejs.org/api/crypto.html#crypto_class_decipher",
          },
          {
            title: "decipher.update(data, [input_encoding], [output_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_decipher_update_data_input_encoding_output_encoding",
          },
          {
            title: "decipher.final([output_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_decipher_final_output_encoding",
          },
          {
            title: "decipher.setAutoPadding(auto_padding=true)",
            url: "http://nodejs.org/api/crypto.html#crypto_decipher_setautopadding_auto_padding_true",
          },
          {
            title: "crypto.createSign(algorithm)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createsign_algorithm",
          },
          {
            title: "Class: Signer",
            url: "http://nodejs.org/api/crypto.html#crypto_class_signer",
          },
          {
            title: "signer.update(data)",
            url: "http://nodejs.org/api/crypto.html#crypto_signer_update_data",
          },
          {
            title: "signer.sign(private_key, [output_format])",
            url: "http://nodejs.org/api/crypto.html#crypto_signer_sign_private_key_output_format",
          },
          {
            title: "crypto.createVerify(algorithm)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_createverify_algorithm",
          },
          {
            title: "Class: Verify",
            url: "http://nodejs.org/api/crypto.html#crypto_class_verify",
          },
          {
            title: "verifier.update(data)",
            url: "http://nodejs.org/api/crypto.html#crypto_verifier_update_data",
          },
          {
            title: "verifier.verify(object, signature, [signature_format])",
            url: "http://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format",
          },
          {
            title: "crypto.createDiffieHellman(prime_length)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_creatediffiehellman_prime_length",
          },
          {
            title: "crypto.createDiffieHellman(prime, [encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_creatediffiehellman_prime_encoding",
          },
          {
            title: "Class: DiffieHellman",
            url: "http://nodejs.org/api/crypto.html#crypto_class_diffiehellman",
          },
          {
            title: "diffieHellman.generateKeys([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_generatekeys_encoding",
          },
          {
            title:
              "diffieHellman.computeSecret(other_public_key, [input_encoding], [output_encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_computesecret_other_public_key_input_encoding_output_encoding",
          },
          {
            title: "diffieHellman.getPrime([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_getprime_encoding",
          },
          {
            title: "diffieHellman.getGenerator([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_getgenerator_encoding",
          },
          {
            title: "diffieHellman.getPublicKey([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_getpublickey_encoding",
          },
          {
            title: "diffieHellman.getPrivateKey([encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_getprivatekey_encoding",
          },
          {
            title: "diffieHellman.setPublicKey(public_key, [encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_setpublickey_public_key_encoding",
          },
          {
            title: "diffieHellman.setPrivateKey(public_key, [encoding])",
            url: "http://nodejs.org/api/crypto.html#crypto_diffiehellman_setprivatekey_public_key_encoding",
          },
          {
            title: "crypto.getDiffieHellman(group_name)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_getdiffiehellman_group_name",
          },
          {
            title:
              "crypto.pbkdf2(password, salt, iterations, keylen, callback)",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_callback",
          },
          {
            title: "crypto.randomBytes(size, [callback])",
            url: "http://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback",
          },
        ],
      },
      {
        title: "TSL(SSL)",
        children: [
          {
            title: "Client-initiated renegotiation attack mitigation",
            url: "http://nodejs.org/api/tls.html#tls_client_initiated_renegotiation_attack_mitigation",
          },
          {
            title: "NPN and SNI",
            url: "http://nodejs.org/api/tls.html#tls_npn_and_sni",
          },
          {
            title: "tls.createServer(options, [secureConnectionListener])",
            url: "http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener",
          },
          {
            title: "tls.connect(options, [secureConnectListener])",
            url: "http://nodejs.org/api/tls.html#tls_tls_connect_options_secureconnectlistener",
          },
          {
            title:
              "tls.connect(port, [host], [options], [secureConnectListener])",
            url: "http://nodejs.org/api/tls.html#tls_tls_connect_port_host_options_secureconnectlistener",
          },
          {
            title:
              "tls.createSecurePair([credentials], [isServer], [requestCert], [rejectUnauthorized])",
            url: "http://nodejs.org/api/tls.html#tls_tls_createsecurepair_credentials_isserver_requestcert_rejectunauthorized",
          },
          {
            title: "Class: SecurePair",
            url: "http://nodejs.org/api/tls.html#tls_class_securepair",
          },
          {
            title: "Event: 'secure'",
            url: "http://nodejs.org/api/tls.html#tls_event_secure",
          },
          {
            title: "Class: tls.Server",
            url: "http://nodejs.org/api/tls.html#tls_class_tls_server",
          },
          {
            title: "Event: 'secureConnection'",
            url: "http://nodejs.org/api/tls.html#tls_event_secureconnection",
          },
          {
            title: "Event: 'clientError'",
            url: "http://nodejs.org/api/tls.html#tls_event_clienterror",
          },
          {
            title: "server.listen(port, [host], [callback])",
            url: "http://nodejs.org/api/tls.html#tls_server_listen_port_host_callback",
          },
          {
            title: "server.close()",
            url: "http://nodejs.org/api/tls.html#tls_server_close",
          },
          {
            title: "server.address()",
            url: "http://nodejs.org/api/tls.html#tls_server_address",
          },
          {
            title: "server.addContext(hostname, credentials)",
            url: "http://nodejs.org/api/tls.html#tls_server_addcontext_hostname_credentials",
          },
          {
            title: "server.maxConnections",
            url: "http://nodejs.org/api/tls.html#tls_server_maxconnections",
          },
          {
            title: "server.connections",
            url: "http://nodejs.org/api/tls.html#tls_server_connections",
          },
          {
            title: "Class: tls.CleartextStream",
            url: "http://nodejs.org/api/tls.html#tls_class_tls_cleartextstream",
          },
          {
            title: "Event: 'secureConnect'",
            url: "http://nodejs.org/api/tls.html#tls_event_secureconnect",
          },
          {
            title: "cleartextStream.authorized",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_authorized",
          },
          {
            title: "cleartextStream.authorizationError",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_authorizationerror",
          },
          {
            title: "cleartextStream.getPeerCertificate()",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_getpeercertificate",
          },
          {
            title: "cleartextStream.getCipher()",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_getcipher",
          },
          {
            title: "cleartextStream.address()",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_address",
          },
          {
            title: "cleartextStream.remoteAddress",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_remoteaddress",
          },
          {
            title: "cleartextStream.remotePort",
            url: "http://nodejs.org/api/tls.html#tls_cleartextstream_remoteport",
          },
        ],
      },
      {
        title: "StringDecoder",
        children: [
          {
            title: "Class: StringDecoder",
            url: "http://nodejs.org/api/string_decoder.html#string_decoder_class_stringdecoder",
          },
          {
            title: "StringDecoder.write(buffer)",
            url: "http://nodejs.org/api/string_decoder.html#string_decoder_stringdecoder_write_buffer",
          },
        ],
      },
    ],
  },

  {
    title: "File",
    children: [
      {
        title: "File System",
        children: [
          {
            title: "fs.rename(oldPath, newPath, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback",
          },
          {
            title: "fs.renameSync(oldPath, newPath)",
            url: "http://nodejs.org/api/fs.html#fs_fs_renamesync_oldpath_newpath",
          },
          {
            title: "fs.truncate(fd, len, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_truncate_fd_len_callback",
          },
          {
            title: "fs.truncateSync(fd, len)",
            url: "http://nodejs.org/api/fs.html#fs_fs_truncatesync_fd_len",
          },
          {
            title: "fs.chown(path, uid, gid, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_chown_path_uid_gid_callback",
          },
          {
            title: "fs.chownSync(path, uid, gid)",
            url: "http://nodejs.org/api/fs.html#fs_fs_chownsync_path_uid_gid",
          },
          {
            title: "fs.fchown(fd, uid, gid, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_fchown_fd_uid_gid_callback",
          },
          {
            title: "fs.fchownSync(fd, uid, gid)",
            url: "http://nodejs.org/api/fs.html#fs_fs_fchownsync_fd_uid_gid",
          },
          {
            title: "fs.lchown(path, uid, gid, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_lchown_path_uid_gid_callback",
          },
          {
            title: "fs.lchownSync(path, uid, gid)",
            url: "http://nodejs.org/api/fs.html#fs_fs_lchownsync_path_uid_gid",
          },
          {
            title: "fs.chmod(path, mode, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback",
          },
          {
            title: "fs.chmodSync(path, mode)",
            url: "http://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode",
          },
          {
            title: "fs.fchmod(fd, mode, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_fchmod_fd_mode_callback",
          },
          {
            title: "fs.fchmodSync(fd, mode)",
            url: "http://nodejs.org/api/fs.html#fs_fs_fchmodsync_fd_mode",
          },
          {
            title: "fs.lchmod(path, mode, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_lchmod_path_mode_callback",
          },
          {
            title: "fs.lchmodSync(path, mode)",
            url: "http://nodejs.org/api/fs.html#fs_fs_lchmodsync_path_mode",
          },
          {
            title: "fs.stat(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_stat_path_callback",
          },
          {
            title: "fs.lstat(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_lstat_path_callback",
          },
          {
            title: "fs.fstat(fd, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_fstat_fd_callback",
          },
          {
            title: "fs.statSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_statsync_path",
          },
          {
            title: "fs.lstatSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_lstatsync_path",
          },
          {
            title: "fs.fstatSync(fd)",
            url: "http://nodejs.org/api/fs.html#fs_fs_fstatsync_fd",
          },
          {
            title: "fs.link(srcpath, dstpath, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_link_srcpath_dstpath_callback",
          },
          {
            title: "fs.linkSync(srcpath, dstpath)",
            url: "http://nodejs.org/api/fs.html#fs_fs_linksync_srcpath_dstpath",
          },
          {
            title: "fs.symlink(destination, path, [type], [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_symlink_destination_path_type_callback",
          },
          {
            title: "fs.symlinkSync(destination, path, [type])",
            url: "http://nodejs.org/api/fs.html#fs_fs_symlinksync_destination_path_type",
          },
          {
            title: "fs.readlink(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_readlink_path_callback",
          },
          {
            title: "fs.readlinkSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_readlinksync_path",
          },
          {
            title: "fs.realpath(path, [cache], callback)",
            url: "http://nodejs.org/api/fs.html#fs_fs_realpath_path_cache_callback",
          },
          {
            title: "fs.realpathSync(path, [cache])",
            url: "http://nodejs.org/api/fs.html#fs_fs_realpathsync_path_cache",
          },
          {
            title: "fs.unlink(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_unlink_path_callback",
          },
          {
            title: "fs.unlinkSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_unlinksync_path",
          },
          {
            title: "fs.rmdir(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_rmdir_path_callback",
          },
          {
            title: "fs.rmdirSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_rmdirsync_path",
          },
          {
            title: "fs.mkdir(path, [mode], [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback",
          },
          {
            title: "fs.mkdirSync(path, [mode])",
            url: "http://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode",
          },
          {
            title: "fs.readdir(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback",
          },
          {
            title: "fs.readdirSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_readdirsync_path",
          },
          {
            title: "fs.close(fd, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_close_fd_callback",
          },
          {
            title: "fs.closeSync(fd)",
            url: "http://nodejs.org/api/fs.html#fs_fs_closesync_fd",
          },
          {
            title: "fs.open(path, flags, [mode], [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback",
          },
          {
            title: "fs.openSync(path, flags, [mode])",
            url: "http://nodejs.org/api/fs.html#fs_fs_opensync_path_flags_mode",
          },
          {
            title: "fs.utimes(path, atime, mtime, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_utimes_path_atime_mtime_callback",
          },
          {
            title: "fs.utimesSync(path, atime, mtime)",
            url: "http://nodejs.org/api/fs.html#fs_fs_utimessync_path_atime_mtime",
          },
          {
            title: "fs.futimes(fd, atime, mtime, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_futimes_fd_atime_mtime_callback",
          },
          {
            title: "fs.futimesSync(fd, atime, mtime)",
            url: "http://nodejs.org/api/fs.html#fs_fs_futimessync_fd_atime_mtime",
          },
          {
            title: "fs.fsync(fd, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_fsync_fd_callback",
          },
          {
            title: "fs.fsyncSync(fd)",
            url: "http://nodejs.org/api/fs.html#fs_fs_fsyncsync_fd",
          },
          {
            title: "fs.write(fd, buffer, offset, length, position, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback",
          },
          {
            title: "fs.writeSync(fd, buffer, offset, length, position)",
            url: "http://nodejs.org/api/fs.html#fs_fs_writesync_fd_buffer_offset_length_position",
          },
          {
            title: "fs.read(fd, buffer, offset, length, position, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_read_fd_buffer_offset_length_position_callback",
          },
          {
            title: "fs.readSync(fd, buffer, offset, length, position)",
            url: "http://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position",
          },
          {
            title: "fs.readFile(filename, [encoding], [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_readfile_filename_encoding_callback",
          },
          {
            title: "fs.readFileSync(filename, [encoding])",
            url: "http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_encoding",
          },
          {
            title: "fs.writeFile(filename, data, [encoding], [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_encoding_callback",
          },
          {
            title: "fs.writeFileSync(filename, data, [encoding])",
            url: "http://nodejs.org/api/fs.html#fs_fs_writefilesync_filename_data_encoding",
          },
          {
            title: "fs.appendFile(filename, data, encoding='utf8', [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_appendfile_filename_data_encoding_utf8_callback",
          },
          {
            title: "fs.appendFileSync(filename, data, encoding='utf8')",
            url: "http://nodejs.org/api/fs.html#fs_fs_appendfilesync_filename_data_encoding_utf8",
          },
          {
            title: "fs.watchFile(filename, [options], listener)",
            url: "http://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener",
          },
          {
            title: "fs.unwatchFile(filename)",
            url: "http://nodejs.org/api/fs.html#fs_fs_unwatchfile_filename",
          },
          {
            title: "fs.watch(filename, [options], [listener])",
            url: "http://nodejs.org/api/fs.html#fs_fs_watch_filename_options_listener",
          },
          {
            title: "Caveats",
            url: "http://nodejs.org/api/fs.html#fs_caveats",
          },
          {
            title: "Availability",
            url: "http://nodejs.org/api/fs.html#fs_availability",
          },
          {
            title: "Filename Argument",
            url: "http://nodejs.org/api/fs.html#fs_filename_argument",
          },
          {
            title: "fs.exists(path, [callback])",
            url: "http://nodejs.org/api/fs.html#fs_fs_exists_path_callback",
          },
          {
            title: "fs.existsSync(path)",
            url: "http://nodejs.org/api/fs.html#fs_fs_existssync_path",
          },
          {
            title: "Class: fs.Stats",
            url: "http://nodejs.org/api/fs.html#fs_class_fs_stats",
          },
          {
            title: "fs.createReadStream(path, [options])",
            url: "http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options",
          },
          {
            title: "Class: fs.ReadStream",
            url: "http://nodejs.org/api/fs.html#fs_class_fs_readstream",
          },
          {
            title: "Event: 'open'",
            url: "http://nodejs.org/api/fs.html#fs_event_open",
          },
          {
            title: "fs.createWriteStream(path, [options])",
            url: "http://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options",
          },
          {
            title: "fs.WriteStream",
            url: "http://nodejs.org/api/fs.html#fs_fs_writestream",
          },
          {
            title: "Event: 'open'",
            url: "http://nodejs.org/api/fs.html#fs_event_open_1",
          },
          {
            title: "file.bytesWritten",
            url: "http://nodejs.org/api/fs.html#fs_file_byteswritten",
          },
          {
            title: "Class: fs.FSWatcher",
            url: "http://nodejs.org/api/fs.html#fs_class_fs_fswatcher",
          },
          {
            title: "watcher.close()",
            url: "http://nodejs.org/api/fs.html#fs_watcher_close",
          },
          {
            title: "Event: 'change'",
            url: "http://nodejs.org/api/fs.html#fs_event_change",
          },
          {
            title: "Event: 'error'",
            url: "http://nodejs.org/api/fs.html#fs_event_error",
          },
        ],
      },
    ],
  },

  {
    title: "Net",
    children: [
      {
        title: "net",
        children: [
          {
            title: "net.createServer([options], [connectionListener])",
            url: "http://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener",
          },
          {
            title: "net.connect(options, [connectionListener])",
            url: "http://nodejs.org/api/net.html#net_net_connect_options_connectionlistener",
          },
          {
            title: "net.createConnection(options, [connectionListener])",
            url: "http://nodejs.org/api/net.html#net_net_createconnection_options_connectionlistener",
          },
          {
            title: "net.connect(port, [host], [connectListener])",
            url: "http://nodejs.org/api/net.html#net_net_connect_port_host_connectlistener",
          },
          {
            title: "net.createConnection(port, [host], [connectListener])",
            url: "http://nodejs.org/api/net.html#net_net_createconnection_port_host_connectlistener",
          },
          {
            title: "net.connect(path, [connectListener])",
            url: "http://nodejs.org/api/net.html#net_net_connect_path_connectlistener",
          },
          {
            title: "net.createConnection(path, [connectListener])",
            url: "http://nodejs.org/api/net.html#net_net_createconnection_path_connectlistener",
          },
          {
            title: "Class: net.Server",
            url: "http://nodejs.org/api/net.html#net_class_net_server",
          },
          {
            title:
              "server.listen(port, [host], [backlog], [listeningListener])",
            url: "http://nodejs.org/api/net.html#net_server_listen_port_host_backlog_listeninglistener",
          },
          {
            title: "server.listen(path, [listeningListener])",
            url: "http://nodejs.org/api/net.html#net_server_listen_path_listeninglistener",
          },
          {
            title: "server.listen(handle, [listeningListener])",
            url: "http://nodejs.org/api/net.html#net_server_listen_handle_listeninglistener",
          },
          {
            title: "server.close([cb])",
            url: "http://nodejs.org/api/net.html#net_server_close_cb",
          },
          {
            title: "server.address()",
            url: "http://nodejs.org/api/net.html#net_server_address",
          },
          {
            title: "server.maxConnections",
            url: "http://nodejs.org/api/net.html#net_server_maxconnections",
          },
          {
            title: "server.connections",
            url: "http://nodejs.org/api/net.html#net_server_connections",
          },
          {
            title: "Event: 'listening'",
            url: "http://nodejs.org/api/net.html#net_event_listening",
          },
          {
            title: "Event: 'connection'",
            url: "http://nodejs.org/api/net.html#net_event_connection",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/net.html#net_event_close",
          },
          {
            title: "Event: 'error'",
            url: "http://nodejs.org/api/net.html#net_event_error",
          },
          {
            title: "Class: net.Socket",
            url: "http://nodejs.org/api/net.html#net_class_net_socket",
          },
          {
            title: "new net.Socket([options])",
            url: "http://nodejs.org/api/net.html#net_new_net_socket_options",
          },
          {
            title: "socket.connect(port, [host], [connectListener])",
            url: "http://nodejs.org/api/net.html#net_socket_connect_port_host_connectlistener",
          },
          {
            title: "socket.connect(path, [connectListener])",
            url: "http://nodejs.org/api/net.html#net_socket_connect_path_connectlistener",
          },
          {
            title: "socket.bufferSize",
            url: "http://nodejs.org/api/net.html#net_socket_buffersize",
          },
          {
            title: "socket.setEncoding([encoding])",
            url: "http://nodejs.org/api/net.html#net_socket_setencoding_encoding",
          },
          {
            title: "socket.write(data, [encoding], [callback])",
            url: "http://nodejs.org/api/net.html#net_socket_write_data_encoding_callback",
          },
          {
            title: "socket.end([data], [encoding])",
            url: "http://nodejs.org/api/net.html#net_socket_end_data_encoding",
          },
          {
            title: "socket.destroy()",
            url: "http://nodejs.org/api/net.html#net_socket_destroy",
          },
          {
            title: "socket.pause()",
            url: "http://nodejs.org/api/net.html#net_socket_pause",
          },
          {
            title: "socket.resume()",
            url: "http://nodejs.org/api/net.html#net_socket_resume",
          },
          {
            title: "socket.setTimeout(timeout, [callback])",
            url: "http://nodejs.org/api/net.html#net_socket_settimeout_timeout_callback",
          },
          {
            title: "socket.setNoDelay([noDelay])",
            url: "http://nodejs.org/api/net.html#net_socket_setnodelay_nodelay",
          },
          {
            title: "socket.setKeepAlive([enable], [initialDelay])",
            url: "http://nodejs.org/api/net.html#net_socket_setkeepalive_enable_initialdelay",
          },
          {
            title: "socket.address()",
            url: "http://nodejs.org/api/net.html#net_socket_address",
          },
          {
            title: "socket.remoteAddress",
            url: "http://nodejs.org/api/net.html#net_socket_remoteaddress",
          },
          {
            title: "socket.remotePort",
            url: "http://nodejs.org/api/net.html#net_socket_remoteport",
          },
          {
            title: "socket.bytesRead",
            url: "http://nodejs.org/api/net.html#net_socket_bytesread",
          },
          {
            title: "socket.bytesWritten",
            url: "http://nodejs.org/api/net.html#net_socket_byteswritten",
          },
          {
            title: "Event: 'connect'",
            url: "http://nodejs.org/api/net.html#net_event_connect",
          },
          {
            title: "Event: 'data'",
            url: "http://nodejs.org/api/net.html#net_event_data",
          },
          {
            title: "Event: 'end'",
            url: "http://nodejs.org/api/net.html#net_event_end",
          },
          {
            title: "Event: 'timeout'",
            url: "http://nodejs.org/api/net.html#net_event_timeout",
          },
          {
            title: "Event: 'drain'",
            url: "http://nodejs.org/api/net.html#net_event_drain",
          },
          {
            title: "Event: 'error'",
            url: "http://nodejs.org/api/net.html#net_event_error_1",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/net.html#net_event_close_1",
          },
          {
            title: "net.isIP(input)",
            url: "http://nodejs.org/api/net.html#net_net_isip_input",
          },
          {
            title: "net.isIPv4(input)",
            url: "http://nodejs.org/api/net.html#net_net_isipv4_input",
          },
          {
            title: "net.isIPv6(input)",
            url: "http://nodejs.org/api/net.html#net_net_isipv6_input",
          },
        ],
      },
      {
        title: "UDP",
        children: [
          {
            title: "dgram.createSocket(type, [callback])",
            url: "#dgram_dgram_createsocket_type_callback",
          },
          {
            title: "Class: Socket",
            url: "#dgram_class_socket",
          },
          {
            title: "Event: 'message'",
            url: "#dgram_event_message",
          },
          {
            title: "Event: 'listening'",
            url: "#dgram_event_listening",
          },
          {
            title: "Event: 'close'",
            url: "#dgram_event_close",
          },
          {
            title: "Event: 'error'",
            url: "#dgram_event_error",
          },
          {
            title: "dgram.send(buf, offset, length, port, address, [callback])",
            url: "#dgram_dgram_send_buf_offset_length_port_address_callback",
          },
          {
            title: "dgram.bind(port, [address])",
            url: "#dgram_dgram_bind_port_address",
          },
          {
            title: "dgram.close()",
            url: "#dgram_dgram_close",
          },
          {
            title: "dgram.address()",
            url: "#dgram_dgram_address",
          },
          {
            title: "dgram.setBroadcast(flag)",
            url: "#dgram_dgram_setbroadcast_flag",
          },
          {
            title: "dgram.setTTL(ttl)",
            url: "#dgram_dgram_setttl_ttl",
          },
          {
            title: "dgram.setMulticastTTL(ttl)",
            url: "#dgram_dgram_setmulticastttl_ttl",
          },
          {
            title: "dgram.setMulticastLoopback(flag)",
            url: "#dgram_dgram_setmulticastloopback_flag",
          },
          {
            title:
              "dgram.addMembership(multicastAddress, [multicastInterface])",
            url: "#dgram_dgram_addmembership_multicastaddress_multicastinterface",
          },
          {
            title:
              "dgram.dropMembership(multicastAddress, [multicastInterface])",
            url: "#dgram_dgram_dropmembership_multicastaddress_multicastinterface",
          },
        ],
      },
      {
        title: "DNS",
        children: [
          {
            title: "dns.lookup(domain, [family], callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_lookup_domain_family_callback",
          },
          {
            title: "dns.resolve(domain, [rrtype], callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolve_domain_rrtype_callback",
          },
          {
            title: "dns.resolve4(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolve4_domain_callback",
          },
          {
            title: "dns.resolve6(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolve6_domain_callback",
          },
          {
            title: "dns.resolveMx(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolvemx_domain_callback",
          },
          {
            title: "dns.resolveTxt(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolvetxt_domain_callback",
          },
          {
            title: "dns.resolveSrv(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolvesrv_domain_callback",
          },
          {
            title: "dns.resolveNs(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolvens_domain_callback",
          },
          {
            title: "dns.resolveCname(domain, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_resolvecname_domain_callback",
          },
          {
            title: "dns.reverse(ip, callback)",
            url: "http://nodejs.org/api/dns.html#dns_dns_reverse_ip_callback",
          },
          {
            title: "Error codes",
            url: "http://nodejs.org/api/dns.html#dns_error_codes",
          },
        ],
      },
    ],
  },

  {
    title: "Text",
    children: [
      {
        title: "Path",
        children: [
          {
            title: "path.normalize(p)",
            url: "http://nodejs.org/api/path.html#path_path_normalize_p",
          },
          {
            title: "path.join([path1], [path2], [...])",
            url: "http://nodejs.org/api/path.html#path_path_join_path1_path2",
          },
          {
            title: "path.resolve([from ...], to)",
            url: "http://nodejs.org/api/path.html#path_path_resolve_from_to",
          },
          {
            title: "path.relative(from, to)",
            url: "http://nodejs.org/api/path.html#path_path_relative_from_to",
          },
          {
            title: "path.dirname(p)",
            url: "http://nodejs.org/api/path.html#path_path_dirname_p",
          },
          {
            title: "path.basename(p, [ext])",
            url: "http://nodejs.org/api/path.html#path_path_basename_p_ext",
          },
          {
            title: "path.extname(p)",
            url: "http://nodejs.org/api/path.html#path_path_extname_p",
          },
          {
            title: "path.sep",
            url: "http://nodejs.org/api/path.html#path_path_sep",
          },
        ],
      },
      {
        title: "Query String",
        children: [
          {
            title: "querystring.stringify(obj, [sep], [eq])",
            url: "http://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq",
          },
          {
            title: "querystring.parse(str, [sep], [eq], [options])",
            url: "http://nodejs.org/api/querystring.html#querystring_querystring_parse_str_sep_eq_options",
          },
          {
            title: "querystring.escape",
            url: "http://nodejs.org/api/querystring.html#querystring_querystring_escape",
          },
          {
            title: "querystring.unescape",
            url: "http://nodejs.org/api/querystring.html#querystring_querystring_unescape",
          },
        ],
      },
      {
        title: "punnycode",
        children: [
          {
            title: "punycode.decode(string)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_decode_string",
          },
          {
            title: "punycode.encode(string)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_encode_string",
          },
          {
            title: "punycode.toUnicode(domain)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_tounicode_domain",
          },
          {
            title: "punycode.toASCII(domain)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_toascii_domain",
          },
          {
            title: "punycode.ucs2",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_ucs2",
          },
          {
            title: "punycode.ucs2.decode(string)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_ucs2_decode_string",
          },
          {
            title: "punycode.ucs2.encode(codePoints)",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_ucs2_encode_codepoints",
          },
          {
            title: "punycode.version",
            url: "http://nodejs.org/api/punycode.html#punycode_punycode_version",
          },
        ],
      },
      {
        title: "Readline",
        children: [
          {
            title: "readline.createInterface(options)",
            url: "http://nodejs.org/api/readline.html#readline_readline_createinterface_options",
          },
          {
            title: "Class: Interface",
            url: "http://nodejs.org/api/readline.html#readline_class_interface",
          },
          {
            title: "rl.setPrompt(prompt, length)",
            url: "http://nodejs.org/api/readline.html#readline_rl_setprompt_prompt_length",
          },
          {
            title: "rl.prompt([preserveCursor])",
            url: "http://nodejs.org/api/readline.html#readline_rl_prompt_preservecursor",
          },
          {
            title: "rl.question(query, callback)",
            url: "http://nodejs.org/api/readline.html#readline_rl_question_query_callback",
          },
          {
            title: "rl.pause()",
            url: "http://nodejs.org/api/readline.html#readline_rl_pause",
          },
          {
            title: "rl.resume()",
            url: "http://nodejs.org/api/readline.html#readline_rl_resume",
          },
          {
            title: "rl.close()",
            url: "http://nodejs.org/api/readline.html#readline_rl_close",
          },
          {
            title: "rl.write(data, [key])",
            url: "http://nodejs.org/api/readline.html#readline_rl_write_data_key",
          },
          {
            title: "Events",
            url: "http://nodejs.org/api/readline.html#readline_events",
          },
          {
            title: "Event: 'line'",
            url: "http://nodejs.org/api/readline.html#readline_event_line",
          },
          {
            title: "Event: 'pause'",
            url: "http://nodejs.org/api/readline.html#readline_event_pause",
          },
          {
            title: "Event: 'resume'",
            url: "http://nodejs.org/api/readline.html#readline_event_resume",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/readline.html#readline_event_close",
          },
          {
            title: "Event: 'SIGINT'",
            url: "http://nodejs.org/api/readline.html#readline_event_sigint",
          },
          {
            title: "Event: 'SIGTSTP'",
            url: "http://nodejs.org/api/readline.html#readline_event_sigtstp",
          },
          {
            title: "Event: 'SIGCONT'",
            url: "http://nodejs.org/api/readline.html#readline_event_sigcont",
          },
          {
            title: "Example: Tiny CLI",
            url: "http://nodejs.org/api/readline.html#readline_example_tiny_cli",
          },
        ],
      },
      {
        title: "REPL",
        children: [
          {
            title: "repl.start(options)",
            url: "http://nodejs.org/api/repl.html#repl_repl_start_options",
          },
          {
            title: "Event: 'exit'",
            url: "http://nodejs.org/api/repl.html#repl_event_exit",
          },
          {
            title: "REPL Features",
            url: "http://nodejs.org/api/repl.html#repl_repl_features",
          },
        ],
      },
    ],
  },

  {
    title: "HTTP",
    children: [
      {
        title: "http",
        children: [
          {
            title: "http.STATUS_CODES",
            url: "http://nodejs.org/api/http.html#http_http_status_codes",
          },
          {
            title: "http.createServer([requestListener])",
            url: "http://nodejs.org/api/http.html#http_http_createserver_requestlistener",
          },
          {
            title: "http.createClient([port], [host])",
            url: "http://nodejs.org/api/http.html#http_http_createclient_port_host",
          },
          {
            title: "http.request(options, callback)",
            url: "http://nodejs.org/api/http.html#http_http_request_options_callback",
          },
          {
            title: "http.get(options, callback)",
            url: "http://nodejs.org/api/http.html#http_http_get_options_callback",
          },
          {
            title: "http.globalAgent",
            url: "http://nodejs.org/api/http.html#http_http_globalagent",
          },
        ],
      },
      {
        title: "http.Server",
        children: [
          {
            title: "Event: 'request'",
            url: "http://nodejs.org/api/http.html#http_event_request",
          },
          {
            title: "Event: 'connection'",
            url: "http://nodejs.org/api/http.html#http_event_connection",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/http.html#http_event_close",
          },
          {
            title: "Event: 'checkContinue'",
            url: "http://nodejs.org/api/http.html#http_event_checkcontinue",
          },
          {
            title: "Event: 'connect'",
            url: "http://nodejs.org/api/http.html#http_event_connect",
          },
          {
            title: "Event: 'upgrade'",
            url: "http://nodejs.org/api/http.html#http_event_upgrade",
          },
          {
            title: "Event: 'clientError'",
            url: "http://nodejs.org/api/http.html#http_event_clienterror",
          },
          {
            title: "server.listen(port, [hostname], [backlog], [callback])",
            url: "http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback",
          },
          {
            title: "server.listen(path, [callback])",
            url: "http://nodejs.org/api/http.html#http_server_listen_path_callback",
          },
          {
            title: "server.listen(handle, [listeningListener])",
            url: "http://nodejs.org/api/http.html#http_server_listen_handle_listeninglistener",
          },
          {
            title: "server.close([cb])",
            url: "http://nodejs.org/api/http.html#http_server_close_cb",
          },
          {
            title: "server.maxHeadersCount",
            url: "http://nodejs.org/api/http.html#http_server_maxheaderscount",
          },
        ],
      },
      {
        title: "http.ServerRequest",
        children: [
          {
            title: "Event: 'data'",
            url: "http://nodejs.org/api/http.html#http_event_data",
          },
          {
            title: "Event: 'end'",
            url: "http://nodejs.org/api/http.html#http_event_end",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/http.html#http_event_close_1",
          },
          {
            title: "request.method",
            url: "http://nodejs.org/api/http.html#http_request_method",
          },
          {
            title: "request.url",
            url: "http://nodejs.org/api/http.html#http_request_url",
          },
          {
            title: "request.headers",
            url: "http://nodejs.org/api/http.html#http_request_headers",
          },
          {
            title: "request.trailers",
            url: "http://nodejs.org/api/http.html#http_request_trailers",
          },
          {
            title: "request.httpVersion",
            url: "http://nodejs.org/api/http.html#http_request_httpversion",
          },
          {
            title: "request.setEncoding([encoding])",
            url: "http://nodejs.org/api/http.html#http_request_setencoding_encoding",
          },
          {
            title: "request.pause()",
            url: "http://nodejs.org/api/http.html#http_request_pause",
          },
          {
            title: "request.resume()",
            url: "http://nodejs.org/api/http.html#http_request_resume",
          },
          {
            title: "request.connection",
            url: "http://nodejs.org/api/http.html#http_request_connection",
          },
        ],
      },
      {
        title: "http.ServerResponse",
        children: [
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/http.html#http_event_close_2",
          },
          {
            title: "response.writeContinue()",
            url: "http://nodejs.org/api/http.html#http_response_writecontinue",
          },
          {
            title: "response.writeHead(statusCode, [reasonPhrase], [headers])",
            url: "http://nodejs.org/api/http.html#http_response_writehead_statuscode_reasonphrase_headers",
          },
          {
            title: "response.statusCode",
            url: "http://nodejs.org/api/http.html#http_response_statuscode",
          },
          {
            title: "response.setHeader(name, value)",
            url: "http://nodejs.org/api/http.html#http_response_setheader_name_value",
          },
          {
            title: "response.sendDate",
            url: "http://nodejs.org/api/http.html#http_response_senddate",
          },
          {
            title: "response.getHeader(name)",
            url: "http://nodejs.org/api/http.html#http_response_getheader_name",
          },
          {
            title: "response.removeHeader(name)",
            url: "http://nodejs.org/api/http.html#http_response_removeheader_name",
          },
          {
            title: "response.write(chunk, [encoding])",
            url: "http://nodejs.org/api/http.html#http_response_write_chunk_encoding",
          },
          {
            title: "response.addTrailers(headers)",
            url: "http://nodejs.org/api/http.html#http_response_addtrailers_headers",
          },
          {
            title: "response.end([data], [encoding])",
            url: "http://nodejs.org/api/http.html#http_response_end_data_encoding",
          },
        ],
      },
      {
        title: "http.Agent",
        children: [
          {
            title: "agent.maxSockets",
            url: "http://nodejs.org/api/http.html#http_agent_maxsockets",
          },
          {
            title: "agent.sockets",
            url: "http://nodejs.org/api/http.html#http_agent_sockets",
          },
          {
            title: "agent.requests",
            url: "http://nodejs.org/api/http.html#http_agent_requests",
          },
        ],
      },
      {
        title: "http.ClientRequest",
        children: [
          {
            title: "Event 'response'",
            url: "http://nodejs.org/api/http.html#http_event_response",
          },
          {
            title: "Event: 'socket'",
            url: "http://nodejs.org/api/http.html#http_event_socket",
          },
          {
            title: "Event: 'connect'",
            url: "http://nodejs.org/api/http.html#http_event_connect_1",
          },
          {
            title: "Event: 'upgrade'",
            url: "http://nodejs.org/api/http.html#http_event_upgrade_1",
          },
          {
            title: "Event: 'continue'",
            url: "http://nodejs.org/api/http.html#http_event_continue",
          },
          {
            title: "request.write(chunk, [encoding])",
            url: "http://nodejs.org/api/http.html#http_request_write_chunk_encoding",
          },
          {
            title: "request.end([data], [encoding])",
            url: "http://nodejs.org/api/http.html#http_request_end_data_encoding",
          },
          {
            title: "request.abort()",
            url: "http://nodejs.org/api/http.html#http_request_abort",
          },
          {
            title: "request.setTimeout(timeout, [callback])",
            url: "http://nodejs.org/api/http.html#http_request_settimeout_timeout_callback",
          },
          {
            title: "request.setNoDelay([noDelay])",
            url: "http://nodejs.org/api/http.html#http_request_setnodelay_nodelay",
          },
          {
            title: "request.setSocketKeepAlive([enable], [initialDelay])",
            url: "http://nodejs.org/api/http.html#http_request_setsocketkeepalive_enable_initialdelay",
          },
        ],
      },
      {
        title: "http.ClientResponse",
        children: [
          {
            title: "Event: 'data'",
            url: "http://nodejs.org/api/http.html#http_event_data_1",
          },
          {
            title: "Event: 'end'",
            url: "http://nodejs.org/api/http.html#http_event_end_1",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/http.html#http_event_close_3",
          },
          {
            title: "response.statusCode",
            url: "http://nodejs.org/api/http.html#http_response_statuscode_1",
          },
          {
            title: "response.httpVersion",
            url: "http://nodejs.org/api/http.html#http_response_httpversion",
          },
          {
            title: "response.headers",
            url: "http://nodejs.org/api/http.html#http_response_headers",
          },
          {
            title: "response.trailers",
            url: "http://nodejs.org/api/http.html#http_response_trailers",
          },
          {
            title: "response.setEncoding([encoding])",
            url: "http://nodejs.org/api/http.html#http_response_setencoding_encoding",
          },
          {
            title: "response.pause()",
            url: "http://nodejs.org/api/http.html#http_response_pause",
          },
          {
            title: "response.resume()",
            url: "http://nodejs.org/api/http.html#http_response_resume",
          },
        ],
      },
      {
        title: "HTTPS",
        children: [
          {
            title: "Class: https.Server",
            url: "http://nodejs.org/api/https.html#https_class_https_server",
          },
          {
            title: "https.createServer(options, [requestListener])",
            url: "http://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",
          },
          {
            title: "https.request(options, callback)",
            url: "http://nodejs.org/api/https.html#https_https_request_options_callback",
          },
          {
            title: "https.get(options, callback)",
            url: "http://nodejs.org/api/https.html#https_https_get_options_callback",
          },
          {
            title: "Class: https.Agent",
            url: "http://nodejs.org/api/https.html#https_class_https_agent",
          },
          {
            title: "https.globalAgent",
            url: "http://nodejs.org/api/https.html#https_https_globalagent",
          },
        ],
      },
      {
        title: "URL",
        children: [
          {
            title: "url.parse(urlStr, [parseQueryString], [slashesDenoteHost])",
            url: "http://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost",
          },
          {
            title: "url.format(urlObj)",
            url: "http://nodejs.org/api/url.html#url_url_format_urlobj",
          },
          {
            title: "url.resolve(from, to)",
            url: "http://nodejs.org/api/url.html#url_url_resolve_from_to",
          },
        ],
      },
    ],
  },

  {
    title: "Code",
    children: [
      {
        title: "Executing JS",
        children: [
          {
            title: "Caveats",
            url: "http://nodejs.org/api/vm.html#vm_caveats",
          },
          {
            title: "Sandboxes",
            url: "http://nodejs.org/api/vm.html#vm_sandboxes",
          },
          {
            title: "Globals",
            url: "http://nodejs.org/api/vm.html#vm_globals",
          },
          {
            title: "vm.runInThisContext(code, [filename])",
            url: "http://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_filename",
          },
          {
            title: "vm.runInNewContext(code, [sandbox], [filename])",
            url: "http://nodejs.org/api/vm.html#vm_vm_runinnewcontext_code_sandbox_filename",
          },
          {
            title: "vm.runInContext(code, context, [filename])",
            url: "http://nodejs.org/api/vm.html#vm_vm_runincontext_code_context_filename",
          },
          {
            title: "vm.createContext([initSandbox])",
            url: "http://nodejs.org/api/vm.html#vm_vm_createcontext_initsandbox",
          },
          {
            title: "vm.createScript(code, [filename])",
            url: "http://nodejs.org/api/vm.html#vm_vm_createscript_code_filename",
          },
          {
            title: "Class: Script",
            url: "http://nodejs.org/api/vm.html#vm_class_script",
          },
          {
            title: "script.runInThisContext()",
            url: "http://nodejs.org/api/vm.html#vm_script_runinthiscontext",
          },
          {
            title: "script.runInNewContext([sandbox])",
            url: "http://nodejs.org/api/vm.html#vm_script_runinnewcontext_sandbox",
          },
        ],
      },
      {
        title: "Child Process",
        children: [
          {
            title: "Class: ChildProcess",
            url: "http://nodejs.org/api/child_process.html#child_process_class_childprocess",
          },
          {
            title: "Event:  'exit'",
            url: "http://nodejs.org/api/child_process.html#child_process_event_exit",
          },
          {
            title: "Event: 'close'",
            url: "http://nodejs.org/api/child_process.html#child_process_event_close",
          },
          {
            title: "Event: 'disconnect'",
            url: "http://nodejs.org/api/child_process.html#child_process_event_disconnect",
          },
          {
            title: "Event: 'message'",
            url: "http://nodejs.org/api/child_process.html#child_process_event_message",
          },
          {
            title: "child.stdin",
            url: "http://nodejs.org/api/child_process.html#child_process_child_stdin",
          },
          {
            title: "child.stdout",
            url: "http://nodejs.org/api/child_process.html#child_process_child_stdout",
          },
          {
            title: "child.stderr",
            url: "http://nodejs.org/api/child_process.html#child_process_child_stderr",
          },
          {
            title: "child.pid",
            url: "http://nodejs.org/api/child_process.html#child_process_child_pid",
          },
          {
            title: "child.kill([signal])",
            url: "http://nodejs.org/api/child_process.html#child_process_child_kill_signal",
          },
          {
            title: "child.send(message, [sendHandle])",
            url: "http://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle",
          },
          {
            title: "child.disconnect()",
            url: "http://nodejs.org/api/child_process.html#child_process_child_disconnect",
          },
          {
            title: "child_process.spawn(command, [args], [options])",
            url: "http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options",
          },
          {
            title: "child_process.exec(command, [options], callback)",
            url: "http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback",
          },
          {
            title: "child_process.execFile(file, args, options, callback)",
            url: "http://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback",
          },
          {
            title: "child_process.fork(modulePath, [args], [options])",
            url: "http://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options",
          },
        ],
      },
      {
        title: "Assert",
        children: [
          {
            title: "assert.fail(actual, expected, message, operator)",
            url: "http://nodejs.org/api/assert.html#assert_assert_fail_actual_expected_message_operator",
          },
          {
            title: "assert(value, message), assert.ok(value, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_value_message_assert_ok_value_message",
          },
          {
            title: "assert.equal(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message",
          },
          {
            title: "assert.notEqual(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_notequal_actual_expected_message",
          },
          {
            title: "assert.deepEqual(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message",
          },
          {
            title: "assert.notDeepEqual(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_notdeepequal_actual_expected_message",
          },
          {
            title: "assert.strictEqual(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message",
          },
          {
            title: "assert.notStrictEqual(actual, expected, [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_notstrictequal_actual_expected_message",
          },
          {
            title: "assert.throws(block, [error], [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_throws_block_error_message",
          },
          {
            title: "assert.doesNotThrow(block, [error], [message])",
            url: "http://nodejs.org/api/assert.html#assert_assert_doesnotthrow_block_error_message",
          },
          {
            title: "assert.ifError(value)",
            url: "http://nodejs.org/api/assert.html#assert_assert_iferror_value",
          },
        ],
      },
    ],
  },

  {
    title: "System",
    children: [
      {
        title: "Zlib",
        children: [
          {
            title: "Examples",
            url: "http://nodejs.org/api/zlib.html#zlib_examples",
          },
          {
            title: "zlib.createGzip([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_creategzip_options",
          },
          {
            title: "zlib.createGunzip([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_creategunzip_options",
          },
          {
            title: "zlib.createDeflate([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_createdeflate_options",
          },
          {
            title: "zlib.createInflate([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_createinflate_options",
          },
          {
            title: "zlib.createDeflateRaw([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options",
          },
          {
            title: "zlib.createInflateRaw([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_createinflateraw_options",
          },
          {
            title: "zlib.createUnzip([options])",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_createunzip_options",
          },
          {
            title: "Class: zlib.Gzip",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_gzip",
          },
          {
            title: "Class: zlib.Gunzip",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_gunzip",
          },
          {
            title: "Class: zlib.Deflate",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_deflate",
          },
          {
            title: "Class: zlib.Inflate",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_inflate",
          },
          {
            title: "Class: zlib.DeflateRaw",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_deflateraw",
          },
          {
            title: "Class: zlib.InflateRaw",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_inflateraw",
          },
          {
            title: "Class: zlib.Unzip",
            url: "http://nodejs.org/api/zlib.html#zlib_class_zlib_unzip",
          },
          {
            title: "Convenience Methods",
            url: "http://nodejs.org/api/zlib.html#zlib_convenience_methods",
          },
          {
            title: "zlib.deflate(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_deflate_buf_callback",
          },
          {
            title: "zlib.deflateRaw(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_deflateraw_buf_callback",
          },
          {
            title: "zlib.gzip(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_gzip_buf_callback",
          },
          {
            title: "zlib.gunzip(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_gunzip_buf_callback",
          },
          {
            title: "zlib.inflate(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_inflate_buf_callback",
          },
          {
            title: "zlib.inflateRaw(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_inflateraw_buf_callback",
          },
          {
            title: "zlib.unzip(buf, callback)",
            url: "http://nodejs.org/api/zlib.html#zlib_zlib_unzip_buf_callback",
          },
          {
            title: "Options",
            url: "http://nodejs.org/api/zlib.html#zlib_options",
          },
          {
            title: "Memory Usage Tuning",
            url: "http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning",
          },
          {
            title: "Constants",
            url: "http://nodejs.org/api/zlib.html#zlib_constants",
          },
        ],
      },
      {
        title: "os",
        children: [
          {
            title: "os.tmpDir()",
            url: "http://nodejs.org/api/os.html#os_os_tmpdir",
          },
          {
            title: "os.hostname()",
            url: "http://nodejs.org/api/os.html#os_os_hostname",
          },
          {
            title: "os.type()",
            url: "http://nodejs.org/api/os.html#os_os_type",
          },
          {
            title: "os.platform()",
            url: "http://nodejs.org/api/os.html#os_os_platform",
          },
          {
            title: "os.arch()",
            url: "http://nodejs.org/api/os.html#os_os_arch",
          },
          {
            title: "os.release()",
            url: "http://nodejs.org/api/os.html#os_os_release",
          },
          {
            title: "os.uptime()",
            url: "http://nodejs.org/api/os.html#os_os_uptime",
          },
          {
            title: "os.loadavg()",
            url: "http://nodejs.org/api/os.html#os_os_loadavg",
          },
          {
            title: "os.totalmem()",
            url: "http://nodejs.org/api/os.html#os_os_totalmem",
          },
          {
            title: "os.freemem()",
            url: "http://nodejs.org/api/os.html#os_os_freemem",
          },
          {
            title: "os.cpus()",
            url: "http://nodejs.org/api/os.html#os_os_cpus",
          },
          {
            title: "os.networkInterfaces()",
            url: "http://nodejs.org/api/os.html#os_os_networkinterfaces",
          },
          {
            title: "os.EOL",
            url: "http://nodejs.org/api/os.html#os_os_eol",
          },
        ],
      },
      {
        title: "Debugger",
        children: [
          {
            title: "Watchers",
            url: "http://nodejs.org/api/debugger.html#debugger_watchers",
          },
          {
            title: "Commands reference",
            url: "http://nodejs.org/api/debugger.html#debugger_commands_reference",
          },
          {
            title: "Stepping",
            url: "http://nodejs.org/api/debugger.html#debugger_stepping",
          },
          {
            title: "Breakpoints",
            url: "http://nodejs.org/api/debugger.html#debugger_breakpoints",
          },
          {
            title: "Info",
            url: "http://nodejs.org/api/debugger.html#debugger_info",
          },
          {
            title: "Execution control",
            url: "http://nodejs.org/api/debugger.html#debugger_execution_control",
          },
          {
            title: "Various",
            url: "http://nodejs.org/api/debugger.html#debugger_various",
          },
          {
            title: "Advanced Usage",
            url: "http://nodejs.org/api/debugger.html#debugger_advanced_usage",
          },
        ],
      },
      {
        title: "Cluster",
        children: [
          {
            title: "How It Works",
            url: "http://nodejs.org/api/cluster.html#cluster_how_it_works",
          },
          {
            title: "cluster.settings",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_settings",
          },
          {
            title: "cluster.isMaster",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_ismaster",
          },
          {
            title: "cluster.isWorker",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_isworker",
          },
          {
            title: "Event: 'fork'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_fork",
          },
          {
            title: "Event: 'online'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_online",
          },
          {
            title: "Event: 'listening'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_listening",
          },
          {
            title: "Event: 'disconnect'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_disconnect",
          },
          {
            title: "Event: 'exit'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_exit",
          },
          {
            title: "Event: 'setup'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_setup",
          },
          {
            title: "cluster.setupMaster([settings])",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_setupmaster_settings",
          },
          {
            title: "cluster.fork([env])",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_fork_env",
          },
          {
            title: "cluster.settings",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_settings_1",
          },
          {
            title: "cluster.disconnect([callback])",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_disconnect_callback",
          },
          {
            title: "cluster.workers",
            url: "http://nodejs.org/api/cluster.html#cluster_cluster_workers",
          },
          {
            title: "Class: Worker",
            url: "http://nodejs.org/api/cluster.html#cluster_class_worker",
          },
          {
            title: "worker.id",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_id",
          },
          {
            title: "worker.process",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_process",
          },
          {
            title: "worker.suicide",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_suicide",
          },
          {
            title: "worker.send(message, [sendHandle])",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_send_message_sendhandle",
          },
          {
            title: "worker.destroy()",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_destroy",
          },
          {
            title: "worker.disconnect()",
            url: "http://nodejs.org/api/cluster.html#cluster_worker_disconnect",
          },
          {
            title: "Event: 'message'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_message",
          },
          {
            title: "Event: 'online'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_online_1",
          },
          {
            title: "Event: 'listening'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_listening_1",
          },
          {
            title: "Event: 'disconnect'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_disconnect_1",
          },
          {
            title: "Event: 'exit'",
            url: "http://nodejs.org/api/cluster.html#cluster_event_exit_1",
          },
        ],
      },
    ],
  },
];
