import { title } from "process";

/*
 * @Author: along
 * @Description:
 * @Date: 2024-10-24 15:23:56
 * @LastEditors: along
 * @LastEditTime: 2024-10-24 15:34:51
 * @FilePath: /cxy-web-tool/src/views/syntax/config/Python.js
 */
export const Python = [
  {
    title: "Resource",
    children: [
      {
        title: "Online",
        children: [
          {
            title: "Official Website",
            url: "http://www.python.org/",
          },
        ],
      },
      {
        title: "Download",
        children: [
          {
            title: "PythonForBeginners.com",
            url: "https://www.pythonforbeginners.com/",
          },
          {
            title: "Python Quick Reference Card [.pdf]",
            url: "/static/cs/PQRC-2.4-A4-latest.pdf",
          },
        ],
      },
      {
        title: "Related",
        children: [
          {
            title: "Python 2.6 Quick Reference",
            url: "http://rgruet.free.fr/PQR26/PQR2.6.html",
          },
        ],
      },
    ],
  },
  {
    title: "String",
    children: [
      {
        title: "String Methods",
        children: [
          {
            title: "capitalize()",
            url: "http://docs.python.org/library/stdtypes.html#str.capitalize",
          },
          {
            title: "center(width[, fillchar])",
            url: "http://docs.python.org/library/stdtypes.html#str.center",
          },
          {
            title: "count(sub[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.count",
          },
          {
            title: "decode",
            url: "http://docs.python.org/library/stdtypes.html#str.decode",
          },
          {
            title: "encode([encoding[, errors]])",
            url: "http://docs.python.org/library/stdtypes.html#str.encode",
          },
          {
            title: "endswith(suffix[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.endswith",
          },
          {
            title: "expandtabs([tabsize])",
            url: "http://docs.python.org/library/stdtypes.html#str.expandtabs",
          },
          {
            title: "find(sub[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.find",
          },
          {
            title: "format(*args, **kwargs)",
            url: "http://docs.python.org/library/stdtypes.html#str.format",
          },
          {
            title: "index(sub[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.index",
          },
          {
            title: "isalnum()",
            url: "http://docs.python.org/library/stdtypes.html#str.isalnum",
          },
          {
            title: "isalpha()",
            url: "http://docs.python.org/library/stdtypes.html#str.isalpha",
          },
          {
            title: "isdigit()",
            url: "http://docs.python.org/library/stdtypes.html#str.isdigit",
          },
          {
            title: "islower()",
            url: "http://docs.python.org/library/stdtypes.html#str.islower",
          },
          {
            title: "isspace()",
            url: "http://docs.python.org/library/stdtypes.html#str.isspace",
          },
          {
            title: "istitle()",
            url: "http://docs.python.org/library/stdtypes.html#str.istitle",
          },
          {
            title: "isupper()",
            url: "http://docs.python.org/library/stdtypes.html#str.isupper",
          },
          {
            title: "join(iterable)",
            url: "http://docs.python.org/library/stdtypes.html#str.join",
          },
          {
            title: "ljust(width[, fillchar])",
            url: "http://docs.python.org/library/stdtypes.html#str.ljust",
          },
          {
            title: "lower()",
            url: "http://docs.python.org/library/stdtypes.html#str.lower",
          },
          {
            title: "lstrip([chars])",
            url: "http://docs.python.org/library/stdtypes.html#str.lstrip",
          },
          {
            title: "partition(sep)",
            url: "http://docs.python.org/library/stdtypes.html#str.partition",
          },
          {
            title: "replace(old, new[, count])",
            url: "http://docs.python.org/library/stdtypes.html#str.replace",
          },
          {
            title: "rfind(sub[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.rfind",
          },
          {
            title: "rindex(sub[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.rindex",
          },
          {
            title: "rjust(width[, fillchar])",
            url: "http://docs.python.org/library/stdtypes.html#str.rjust",
          },
          {
            title: "rpartition(sep)",
            url: "http://docs.python.org/library/stdtypes.html#str.rpartition",
          },
          {
            title: "rsplit([sep[, maxsplit]])",
            url: "http://docs.python.org/library/stdtypes.html#str.rsplit",
          },
          {
            title: "rstrip([chars])",
            url: "http://docs.python.org/library/stdtypes.html#str.rstrip",
          },
          {
            title: "split([sep[, maxsplit]])",
            url: "http://docs.python.org/library/stdtypes.html#str.split",
          },
          {
            title: "splitlines([keepends])",
            url: "http://docs.python.org/library/stdtypes.html#str.splitlines",
          },
          {
            title: "startswith(prefix[, start[, end]])",
            url: "http://docs.python.org/library/stdtypes.html#str.startswith",
          },
          {
            title: "strip([chars])",
            url: "http://docs.python.org/library/stdtypes.html#str.strip",
          },
          {
            title: "swapcase",
            url: "http://docs.python.org/library/stdtypes.html#str.swapcase",
          },
          {
            title: "title()",
            url: "http://docs.python.org/library/stdtypes.html#str.title",
          },
          {
            title: "translate(table[, deletechars])",
            url: "http://docs.python.org/library/stdtypes.html#str.translate",
          },
          {
            title: "upper()",
            url: "http://docs.python.org/library/stdtypes.html#str.upper",
          },
          {
            title: "zfill(width)",
            url: "http://docs.python.org/library/stdtypes.html#str.zfill",
          },
          {
            title: "isnumeric()",
            url: "http://docs.python.org/library/stdtypes.html#unicode.isnumeric",
          },
          {
            title: "isdecimal()",
            url: "http://docs.python.org/library/stdtypes.html#unicode.isdecimal",
          },
        ],
      },
    ],
  },
  {
    title: "File",
    children: [
      {
        title: "Methods",
        children: [
          {
            title: "close()",
            url: "http://docs.python.org/library/stdtypes.html#file.close",
          },
          {
            title: "flush()",
            url: "http://docs.python.org/library/stdtypes.html#file.flush",
          },
          {
            title: "fileno()",
            url: "http://docs.python.org/library/stdtypes.html#file.fileno",
          },
          {
            title: "isatty()",
            url: "http://docs.python.org/library/stdtypes.html#file.isatty",
          },
          {
            title: "next()",
            url: "http://docs.python.org/library/stdtypes.html#file.next",
          },
          {
            title: "read([size])",
            url: "http://docs.python.org/library/stdtypes.html#file.read",
          },
          {
            title: "readline([size])",
            url: "http://docs.python.org/library/stdtypes.html#file.readline",
          },
          {
            title: "readlines([sizehint])",
            url: "http://docs.python.org/library/stdtypes.html#file.readlines",
          },
          {
            title: "xreadlines()",
            url: "http://docs.python.org/library/stdtypes.html#file.xreadlines",
          },
          {
            title: "seek(offset[, whence])",
            url: "http://docs.python.org/library/stdtypes.html#file.seek",
          },
          {
            title: "tell()",
            url: "http://docs.python.org/library/stdtypes.html#file.tell",
          },
          {
            title: "truncate([size])",
            url: "http://docs.python.org/library/stdtypes.html#file.truncate",
          },
          {
            title: "write(str)",
            url: "http://docs.python.org/library/stdtypes.html#file.write",
          },
          {
            title: "writelines(sequence)",
            url: "http://docs.python.org/library/stdtypes.html#file.writelines",
          },
        ],
      },
      {
        title: "Attributes",
        children: [
          {
            title: "closed",
            url: "http://docs.python.org/library/stdtypes.html#file.closed",
          },
          {
            title: "encoding",
            url: "http://docs.python.org/library/stdtypes.html#file.encoding",
          },
          {
            title: "errors",
            url: "http://docs.python.org/library/stdtypes.html#file.errors",
          },
          {
            title: "mode",
            url: "http://docs.python.org/library/stdtypes.html#file.mode",
          },
          {
            title: "name",
            url: "http://docs.python.org/library/stdtypes.html#file.name",
          },
          {
            title: "newlines",
            url: "http://docs.python.org/library/stdtypes.html#file.newlines",
          },
          {
            title: "softspace",
            url: "http://docs.python.org/library/stdtypes.html#file.softspace",
          },
        ],
      },
    ],
  },
  {
    title: "Set|Mapping",
    children: [
      {
        title: "Set Types",
        children: [
          {
            title: "isdisjoint(other)",
            url: "http://docs.python.org/library/stdtypes.html#set.isdisjoint",
          },
          {
            title: "issubset(others)",
            url: "http://docs.python.org/library/stdtypes.html#set.issubset",
          },
          {
            title: "issuperset",
            url: "http://docs.python.org/library/stdtypes.html#set.issuperset",
          },
          {
            title: "union(other...)",
            url: "http://docs.python.org/library/stdtypes.html#set.union",
          },
          {
            title: "intersection(other, ...)",
            url: "http://docs.python.org/library/stdtypes.html#set.intersection",
          },
          {
            title: "difference(other...)",
            url: "http://docs.python.org/library/stdtypes.html#set.difference",
          },
          {
            title: "symmetric_difference(other)",
            url: "http://docs.python.org/library/stdtypes.html#set.symmetric_difference",
          },
          {
            title: "copy()",
            url: "http://docs.python.org/library/stdtypes.html#set.copy",
          },
          {
            title: "update()",
            url: "http://docs.python.org/library/stdtypes.html#set.update",
          },
          {
            title: "intersection_update()",
            url: "http://docs.python.org/library/stdtypes.html#set.intersection_update",
          },
          {
            title: "difference_update()",
            url: "http://docs.python.org/library/stdtypes.html#set.difference_update",
          },
          {
            title: "symmetric_difference_update()",
            url: "http://docs.python.org/library/stdtypes.html#set.symmetric_difference_update",
          },
          {
            title: "add(elem)",
            url: "http://docs.python.org/library/stdtypes.html#set.add",
          },
          {
            title: "remove()",
            url: "http://docs.python.org/library/stdtypes.html#set.remove",
          },
          {
            title: "discard(elem)",
            url: "http://docs.python.org/library/stdtypes.html#set.discard",
          },
          {
            title: "pop()",
            url: "http://docs.python.org/library/stdtypes.html#set.pop",
          },
          {
            title: "clear()",
            url: "http://docs.python.org/library/stdtypes.html#set.clear",
          },
        ],
      },
      {
        title: "Mapping Types",
        children: [
          {
            title: "clear()",
            url: "http://docs.python.org/library/stdtypes.html#dict.clear",
          },
          {
            title: "copy()",
            url: "http://docs.python.org/library/stdtypes.html#dict.copy",
          },
          {
            title: "fromkeys(seq[, value])",
            url: "http://docs.python.org/library/stdtypes.html#dict.fromkeys",
          },
          {
            title: "get(key[, default])",
            url: "http://docs.python.org/library/stdtypes.html#dict.get",
          },
          {
            title: "has_key(key)",
            url: "http://docs.python.org/library/stdtypes.html#dict.has_key",
          },
          {
            title: "items()",
            url: "http://docs.python.org/library/stdtypes.html#dict.items",
          },
          {
            title: "iteritems()",
            url: "http://docs.python.org/library/stdtypes.html#dict.iteritems",
          },
          {
            title: "iterkeys()",
            url: "http://docs.python.org/library/stdtypes.html#dict.iterkeys",
          },
          {
            title: "itervalues()",
            url: "http://docs.python.org/library/stdtypes.html#dict.itervalues",
          },
          {
            title: "keys()",
            url: "http://docs.python.org/library/stdtypes.html#dict.keys",
          },
          {
            title: "pop(key[, default])",
            url: "http://docs.python.org/library/stdtypes.html#dict.pop",
          },
          {
            title: "popitem()",
            url: "http://docs.python.org/library/stdtypes.html#dict.popitem",
          },
          {
            title: "setdefault(key[, default])",
            url: "http://docs.python.org/library/stdtypes.html#dict.setdefault",
          },
          {
            title: "update([other])",
            url: "http://docs.python.org/library/stdtypes.html#dict.update",
          },
          {
            title: "values",
            url: "http://docs.python.org/library/stdtypes.html#dict.values",
          },
        ],
      },
    ],
  },
  {
    title: "Date Time",
    children: [
      {
        title: "Date Object",
        children: [
          {
            title: "replace((year, month, day))",
            url: "http://docs.python.org/library/datetime.html#datetime.date.replace",
          },
          {
            title: "timetuple()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.timetuple",
          },
          {
            title: "toordinal()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.toordinal",
          },
          {
            title: "weekday()()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.weekday",
          },
          {
            title: "isoweekday()()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.isoweekday",
          },
          {
            title: "isocalendar()()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.isocalendar",
          },
          {
            title: "isoformat()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.isoformat",
          },
          {
            title: "__str__()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.__str__",
          },
          {
            title: "ctime()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.ctime",
          },
          {
            title: "strftime()",
            url: "http://docs.python.org/library/datetime.html#datetime.date.strftime",
          },
        ],
      },
      {
        title: "Datetime Object",
        children: [
          {
            title: "date()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.date",
          },
          {
            title: "time()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.time",
          },
          {
            title: "timetz()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.timetz",
          },
          {
            title:
              "replace([year[, month[, day[, hour[, minute[, second[, microsecond[, tzinfo]]]]]]]])",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.replace",
          },
          {
            title: "astimezone(tz)",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.astimezone",
          },
          {
            title: "utcoffset()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.utcoffset",
          },
          {
            title: "dst()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.dst",
          },
          {
            title: "tzname()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.tzname",
          },
          {
            title: "timetuple()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.timetuple",
          },
          {
            title: "utctimetuple()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.utctimetuple",
          },
          {
            title: "toordinal()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.toordinal",
          },
          {
            title: "weekday()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.weekday",
          },
          {
            title: "isoweekday()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.isoweekday",
          },
          {
            title: "isocalendar()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.isocalendar",
          },
          {
            title: "isoformat()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.isoformat",
          },
          {
            title: "__str__()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.__str__",
          },
          {
            title: "ctime()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.ctime",
          },
          {
            title: "strftime()",
            url: "http://docs.python.org/library/datetime.html#datetime.datetime.strftime",
          },
        ],
      },
      {
        title: "Time Object",
        children: [
          {
            title:
              "replace([hour[, minute[, second[, microsecond[, tzinfo]]]]])",
            url: "http://docs.python.org/library/datetime.html#datetime.time.replace",
          },
          {
            title: "isoformat()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.isoformat",
          },
          {
            title: "__str__()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.__str__",
          },
          {
            title: "strftime()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.strftime",
          },
          {
            title: "utcoffset()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.utcoffset",
          },
          {
            title: "dst()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.dst",
          },
          {
            title: "tzname()",
            url: "http://docs.python.org/library/datetime.html#datetime.time.tzname",
          },
        ],
      },
    ],
  },
  {
    title: "Arrary",
    children: [
      {
        title: "Array Methods",
        children: [
          {
            title: "append(x)",
            url: "http://docs.python.org/library/array.html#array.array.append",
          },
          {
            title: "buffer_info()",
            url: "http://docs.python.org/library/array.html#array.array.buffer_info",
          },
          {
            title: "byteswap()",
            url: "http://docs.python.org/library/array.html#array.array.byteswap",
          },
          {
            title: "count(x)",
            url: "http://docs.python.org/library/array.html#array.array.count",
          },
          {
            title: "extend(iterable)",
            url: "http://docs.python.org/library/array.html#array.array.extend",
          },
          {
            title: "fromfile(f,n)",
            url: "http://docs.python.org/library/array.html#array.array.fromfile",
          },
          {
            title: "fromlist(list)",
            url: "http://docs.python.org/library/array.html#array.array.fromlist",
          },
          {
            title: "fromstring(s)",
            url: "http://docs.python.org/library/array.html#array.array.fromstring",
          },
          {
            title: "fromunicode(s)",
            url: "http://docs.python.org/library/array.html#array.array.fromunicode",
          },
          {
            title: "index(x)",
            url: "http://docs.python.org/library/array.html#array.array.index",
          },
          {
            title: "insert(i,x)",
            url: "http://docs.python.org/library/array.html#array.array.insert",
          },
          {
            title: "pop([i])",
            url: "http://docs.python.org/library/array.html#array.array.pop",
          },
          {
            title: "remove(x)",
            url: "http://docs.python.org/library/array.html#array.array.remove",
          },
          {
            title: "reverse()",
            url: "http://docs.python.org/library/array.html#array.array.reverse",
          },
          {
            title: "tofile(f)",
            url: "http://docs.python.org/library/array.html#array.array.tofile",
          },
          {
            title: "tolist()",
            url: "http://docs.python.org/library/array.html#array.array.tolist",
          },
          {
            title: "tostring()",
            url: "http://docs.python.org/library/array.html#array.array.tostring",
          },
          {
            title: "tounicode()",
            url: "http://docs.python.org/library/array.html#array.array.tounicode",
          },
        ],
      },
    ],
  },
  {
    title: "Math",
    children: [
      {
        title: "Number Theoretic",
        children: [
          {
            title: "ceil(x)",
            url: "http://docs.python.org/library/math.html#math.ceil",
          },
          {
            title: "copysign(x,y)",
            url: "http://docs.python.org/library/math.html#math.copysign",
          },
          {
            title: "fabs(x)",
            url: "http://docs.python.org/library/math.html#math.fabs",
          },
          {
            title: "factorial(x)",
            url: "http://docs.python.org/library/math.html#math.factorial",
          },
          {
            title: "floor(x)",
            url: "http://docs.python.org/library/math.html#math.floor",
          },
          {
            title: "fmod(x,y)",
            url: "http://docs.python.org/library/math.html#math.fmod",
          },
          {
            title: "frexp(x)",
            url: "http://docs.python.org/library/math.html#math.frexp",
          },
          {
            title: "fsum(iterable)",
            url: "http://docs.python.org/library/math.html#math.fsum",
          },
          {
            title: "isinf(x)",
            url: "http://docs.python.org/library/math.html#math.isinf",
          },
          {
            title: "isnan(x)",
            url: "http://docs.python.org/library/math.html#math.isnan",
          },
          {
            title: "ldexp(x,i)",
            url: "http://docs.python.org/library/math.html#math.ldexp",
          },
          {
            title: "modf()",
            url: "http://docs.python.org/library/math.html#math.modf",
          },
          {
            title: "trunc()",
            url: "http://docs.python.org/library/math.html#math.trunc",
          },
        ],
      },
      {
        title: "Power and Logarithmic",
        children: [
          {
            title: "exp(x)",
            url: "http://docs.python.org/library/math.html#math.exp",
          },
          {
            title: "log(x[,base])",
            url: "http://docs.python.org/library/math.html#math.log",
          },
          {
            title: "log1p(x)",
            url: "http://docs.python.org/library/math.html#math.log1p",
          },
          {
            title: "log10(x)",
            url: "http://docs.python.org/library/math.html#math.log10",
          },
          {
            title: "pow(x,y)",
            url: "http://docs.python.org/library/math.html#math.pow",
          },
          {
            title: "sqrt(x)",
            url: "http://docs.python.org/library/math.html#math.sqrt",
          },
        ],
      },
      {
        title: "Trigonometric Functions",
        children: [
          {
            title: "acos(x)",
            url: "http://docs.python.org/library/math.html#math.acos",
          },
          {
            title: "asin(x)",
            url: "http://docs.python.org/library/math.html#math.asin",
          },
          {
            title: "atan(x)",
            url: "http://docs.python.org/library/math.html#math.atan",
          },
          {
            title: "atan2(y,x)",
            url: "http://docs.python.org/library/math.html#math.atan2",
          },
          {
            title: "cos(x)",
            url: "http://docs.python.org/library/math.html#math.cos",
          },
          {
            title: "hypot(x,y)",
            url: "http://docs.python.org/library/math.html#math.hypot",
          },
          {
            title: "sin(x)",
            url: "http://docs.python.org/library/math.html#math.sin",
          },
          {
            title: "tan(x)",
            url: "http://docs.python.org/library/math.html#math.tan",
          },
        ],
      },
      {
        title: "Angular Conversion",
        children: [
          {
            title: "degrees(x)",
            url: "http://docs.python.org/library/math.html#math.degrees",
          },
          {
            title: "radians(x)",
            url: "http://docs.python.org/library/math.html#math.radians",
          },
        ],
      },
      {
        title: "Hyperbolic Functions",
        children: [
          {
            title: "acosh(x)",
            url: "http://docs.python.org/library/math.html#math.acosh",
          },
          {
            title: "asinh(x)",
            url: "http://docs.python.org/library/math.html#math.asinh",
          },
          {
            title: "atanh(x)",
            url: "http://docs.python.org/library/math.html#math.atanh",
          },
          {
            title: "cosh(x)",
            url: "http://docs.python.org/library/math.html#math.cosh",
          },
          {
            title: "sinh(x)",
            url: "http://docs.python.org/library/math.html#math.sinh",
          },
          {
            title: "tanh(x)",
            url: "http://docs.python.org/library/math.html#math.tanh",
          },
        ],
      },
    ],
  },
  {
    title: "Random",
    children: [
      {
        title: "Functions",
        children: [
          {
            title: "seed([x])",
            url: "http://docs.python.org/library/random.html#random.seed",
          },
          {
            title: "getstate()",
            url: "http://docs.python.org/library/random.html#random.getstate",
          },
          {
            title: "setstate(state)",
            url: "http://docs.python.org/library/random.html#random.setstate",
          },
          {
            title: "jumpahead(n)",
            url: "http://docs.python.org/library/random.html#random.jumpahead",
          },
          {
            title: "getrandbits(k)",
            url: "http://docs.python.org/library/random.html#random.getrandbits",
          },
          {
            title: "randrange([start], stop[, step])",
            url: "http://docs.python.org/library/random.html#random.randrange",
          },
          {
            title: "randint(a,b)",
            url: "http://docs.python.org/library/random.html#random.randint",
          },
          {
            title: "choice(seq)",
            url: "http://docs.python.org/library/random.html#random.choice",
          },
          {
            title: "shuffle(x[,random])",
            url: "http://docs.python.org/library/random.html#random.shuffle",
          },
          {
            title: "sample(population,k)",
            url: "http://docs.python.org/library/random.html#random.sample",
          },
          {
            title: "random()",
            url: "http://docs.python.org/library/random.html#random.random",
          },
          {
            title: "uniform(a,b)",
            url: "http://docs.python.org/library/random.html#random.uniform",
          },
          {
            title: "triangular(low,high,mode)",
            url: "http://docs.python.org/library/random.html#random.triangular",
          },
          {
            title: "betavariate(alpha,beta)",
            url: "http://docs.python.org/library/random.html#random.betavariate",
          },
          {
            title: "expovariate(lambd)",
            url: "http://docs.python.org/library/random.html#random.expovariate",
          },
          {
            title: "gammavariate(alpha,beta)",
            url: "http://docs.python.org/library/random.html#random.gammavariate",
          },
          {
            title: "gauss(mu,sigma)",
            url: "http://docs.python.org/library/random.html#random.gauss",
          },
          {
            title: "lognormvariate(mu,sigma)",
            url: "http://docs.python.org/library/random.html#random.lognormvariate",
          },
          {
            title: "normalvariate(mu,sigma)",
            url: "http://docs.python.org/library/random.html#random.normalvariate",
          },
          {
            title: "vonmisesvariate(mu,kappa)",
            url: "http://docs.python.org/library/random.html#random.vonmisesvariate",
          },
          {
            title: "paretovariate(alpha)",
            url: "http://docs.python.org/library/random.html#random.paretovariate",
          },
          {
            title: "weibullvariate(alpha,beta)",
            url: "http://docs.python.org/library/random.html#random.weibullvariate",
          },
        ],
      },
    ],
  },
];
